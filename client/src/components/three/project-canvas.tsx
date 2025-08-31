import { useEffect, useRef } from "react";

interface ProjectCanvasProps {
  canvasId: string;
  color: string;
}

export default function ProjectCanvas({ canvasId, color }: ProjectCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const loadThreeJS = async () => {
      const THREE = await import('three');
      
      const canvas = canvasRef.current!;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
      
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      renderer.setClearColor(0x000000, 0);

      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ 
        color: color,
        wireframe: true,
        transparent: true,
        opacity: 0.8
      });

      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
      camera.position.z = 3;

      function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      }
      animate();

      // Handle canvas resize
      const handleResize = () => {
        if (canvas.clientWidth && canvas.clientHeight) {
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        }
      };

      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(canvas);

      // Cleanup
      return () => {
        resizeObserver.disconnect();
        renderer.dispose();
        geometry.dispose();
        material.dispose();
      };
    };

    loadThreeJS();
  }, [color]);

  return <canvas ref={canvasRef} className="w-full h-full rounded-lg" />;
}
