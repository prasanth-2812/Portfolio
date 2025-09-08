import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const defaultSEO = {
  title: 'Kathi Prasanth - Full Stack Developer | Machine Learning & Web Development',
  description: 'Full Stack Web Developer specializing in React, Node.js, Python, and Machine Learning. B.Tech in Information Technology with expertise in cybersecurity, 3D web development, and modern web technologies.',
  keywords: 'Full Stack Developer, React Developer, Node.js, Python, Machine Learning, Web Development, Cybersecurity, Three.js, Portfolio, Kathi Prasanth, Information Technology, B.Tech',
  image: 'https://prasanth-portfolio.com/og-image.jpg',
  url: 'https://prasanth-portfolio.com',
  type: 'website'
};

const pageSEO = {
  '/': {
    title: 'Kathi Prasanth - Full Stack Developer | Machine Learning & Web Development',
    description: 'Full Stack Web Developer specializing in React, Node.js, Python, and Machine Learning. B.Tech in Information Technology with expertise in cybersecurity, 3D web development, and modern web technologies.',
    keywords: 'Full Stack Developer, React Developer, Node.js, Python, Machine Learning, Web Development, Cybersecurity, Three.js, Portfolio, Kathi Prasanth, Information Technology, B.Tech'
  },
  '/about': {
    title: 'About Kathi Prasanth - Full Stack Developer & Machine Learning Engineer',
    description: 'Learn about Kathi Prasanth, a passionate Full Stack Developer with B.Tech in Information Technology. Specializing in React, Node.js, Python, Machine Learning, and cybersecurity solutions.',
    keywords: 'About Kathi Prasanth, Full Stack Developer, Machine Learning Engineer, B.Tech Information Technology, React Developer, Python Developer, Cybersecurity Expert'
  },
  '/skills': {
    title: 'Technical Skills - Kathi Prasanth | Full Stack Developer',
    description: 'Explore the technical skills of Kathi Prasanth including React.js, Node.js, Python, Machine Learning, Three.js, Cybersecurity, and modern web development technologies.',
    keywords: 'Technical Skills, React.js, Node.js, Python, Machine Learning, Three.js, Cybersecurity, Web Development, Full Stack Developer, Kathi Prasanth'
  },
  '/projects': {
    title: 'Projects - Kathi Prasanth | Full Stack Developer Portfolio',
    description: 'View featured projects by Kathi Prasanth including ML Phishing Detector, React applications, Node.js APIs, 3D web experiences, and full-stack solutions.',
    keywords: 'Projects, Portfolio, ML Phishing Detector, React Projects, Node.js API, 3D Web Development, Full Stack Projects, Machine Learning Projects, Kathi Prasanth'
  },
  '/contact': {
    title: 'Contact Kathi Prasanth - Full Stack Developer',
    description: 'Get in touch with Kathi Prasanth for collaboration opportunities, project discussions, or technical consultations. Available for full-stack development and machine learning projects.',
    keywords: 'Contact, Full Stack Developer, Collaboration, Project Discussion, Technical Consultation, Kathi Prasanth, React Developer, Python Developer'
  }
};

export default function SEOHead({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type 
}: SEOHeadProps) {
  const [location] = useLocation();
  
  const currentPageSEO = pageSEO[location as keyof typeof pageSEO] || {};
  const finalSEO = {
    title: title || currentPageSEO.title || defaultSEO.title,
    description: description || currentPageSEO.description || defaultSEO.description,
    keywords: keywords || currentPageSEO.keywords || defaultSEO.keywords,
    image: image || defaultSEO.image,
    url: url || `${defaultSEO.url}${location}`,
    type: type || defaultSEO.type
  };

  useEffect(() => {
    // Update document title
    document.title = finalSEO.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', finalSEO.description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', finalSEO.keywords);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', finalSEO.title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', finalSEO.description);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', finalSEO.url);
    }
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', finalSEO.image);
    }
    
    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', finalSEO.title);
    }
    
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', finalSEO.description);
    }
    
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute('content', finalSEO.url);
    }
    
    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', finalSEO.image);
    }
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', finalSEO.url);
    }
    
    // Add structured data for current page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": finalSEO.title,
      "description": finalSEO.description,
      "url": finalSEO.url,
      "mainEntity": {
        "@type": "Person",
        "name": "Kathi Prasanth",
        "jobTitle": "Full Stack Developer",
        "description": "Full Stack Web Developer specializing in React, Node.js, Python, and Machine Learning with expertise in cybersecurity and 3D web development.",
        "url": "https://prasanth-portfolio.com",
        "image": "https://prasanth-portfolio.com/profile-image.jpg",
        "sameAs": [
          "https://linkedin.com/in/kathi-prasanth",
          "https://github.com/prasanth-2812"
        ],
        "email": "prasanthkathi05@gmail.com",
        "telephone": "+91-9652824932",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN",
          "addressRegion": "India"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Information Technology",
          "description": "Bachelor of Technology in Information Technology"
        },
        "knowsAbout": [
          "React.js",
          "Node.js",
          "Python",
          "Machine Learning",
          "Web Development",
          "Cybersecurity",
          "Three.js",
          "TypeScript",
          "JavaScript",
          "HTML5",
          "CSS3",
          "PostgreSQL",
          "MongoDB",
          "Flask",
          "Express.js"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Full Stack Developer",
          "description": "Developing full-stack web applications using modern technologies including React, Node.js, Python, and Machine Learning"
        }
      }
    };
    
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
  }, [finalSEO.title, finalSEO.description, finalSEO.keywords, finalSEO.image, finalSEO.url, finalSEO.type, location]);

  return null;
}
