import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Import Three.js dynamically
    const loadThreeJS = async () => {
      const THREE = await import('three');
      
      const canvas = canvasRef.current!;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);

      // Create floating geometric shapes
      const geometry = new THREE.IcosahedronGeometry(1, 0);
      const material = new THREE.MeshBasicMaterial({ 
        color: 0xef4444, 
        wireframe: true,
        transparent: true,
        opacity: 0.6
      });

      const shapes: any[] = [];
      for (let i = 0; i < 15; i++) {
        const shape = new THREE.Mesh(geometry, material);
        shape.position.set(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        );
        shape.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );
        scene.add(shape);
        shapes.push(shape);
      }

      camera.position.z = 10;

      // Animation loop
      function animate() {
        requestAnimationFrame(animate);
        
        shapes.forEach((shape, index) => {
          shape.rotation.x += 0.005;
          shape.rotation.y += 0.005;
          shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
        });

        renderer.render(scene, camera);
      }
      animate();

      // Handle window resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
        geometry.dispose();
        material.dispose();
      };
    };

    loadThreeJS();
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" />;
}
