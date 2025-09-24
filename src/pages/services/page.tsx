
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ServicesHero from './components/ServicesHero';
import ServicesList from './components/ServicesList';
import ProcessSection from './components/ProcessSection';
import TechnologyStack from './components/TechnologyStack';

export default function ServicesPage() {
  useEffect(() => {
    // Add Schema.org JSON-LD for services page
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Information Technology Services",
      "provider": {
        "@type": "Organization",
        "name": "IT1Stop",
        "url": import.meta.env.VITE_SITE_URL || "https://it1stop.com"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IT Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud Solutions",
              "description": "Scalable cloud infrastructure and migration services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Artificial Intelligence",
              "description": "AI and machine learning solutions for business automation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Security & Compliance",
              "description": "Cybersecurity solutions and compliance management"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Data Analytics",
              "description": "Business intelligence and data visualization services"
            }
          }
        ]
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      }
    });
    document.head.appendChild(schemaScript);

    // Update meta tags
    document.title = "IT Services - Cloud, AI, Security & More | IT1Stop";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive IT services including cloud solutions, artificial intelligence, cybersecurity, data analytics, and custom software development for enterprises and government agencies.');
    }

    return () => {
      document.head.removeChild(schemaScript);
    };
  }, []);

  return (
    <div>
      <Header />
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <TechnologyStack />
      <Footer />
    </div>
  );
}
