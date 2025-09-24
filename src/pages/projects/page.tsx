
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ProjectsHero from './components/ProjectsHero';
import ProjectsGrid from './components/ProjectsGrid';
import ProjectsStats from './components/ProjectsStats';

export default function Projects() {
  useEffect(() => {
    // Add Schema.org JSON-LD for projects page
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "IT Projects Portfolio",
      "description": "Showcase of successful IT projects delivered by IT1Stop for government agencies and enterprise clients",
      "url": `${import.meta.env.VITE_SITE_URL || "https://it1stop.com"}/projects`,
      "mainEntity": {
        "@type": "ItemList",
        "name": "IT Projects",
        "description": "Portfolio of successful technology implementations",
        "itemListElement": [
          {
            "@type": "CreativeWork",
            "name": "Government Cloud Migration",
            "description": "Secure cloud infrastructure migration for government agencies"
          },
          {
            "@type": "CreativeWork", 
            "name": "Enterprise Mobile Applications",
            "description": "Custom mobile applications for enterprise clients"
          },
          {
            "@type": "CreativeWork",
            "name": "Data Analytics Platform",
            "description": "Business intelligence and analytics solutions"
          }
        ]
      },
      "provider": {
        "@type": "Organization",
        "name": "IT1Stop",
        "url": import.meta.env.VITE_SITE_URL || "https://it1stop.com"
      }
    });
    document.head.appendChild(schemaScript);

    // Update meta tags
    document.title = "IT Projects Portfolio - Government & Enterprise Solutions | IT1Stop";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our portfolio of successful IT projects for government agencies and enterprise clients. Cloud migrations, mobile apps, data analytics, and custom software solutions.');
    }

    return () => {
      document.head.removeChild(schemaScript);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <ProjectsHero />
      <ProjectsStats />
      <ProjectsGrid />
      <Footer />
    </div>
  );
}
