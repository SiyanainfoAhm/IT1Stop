
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import AboutHero from './components/AboutHero';
import CompanyStory from './components/CompanyStory';
import ValuesSection from './components/ValuesSection';

export default function AboutPage() {
  useEffect(() => {
    // Add Schema.org JSON-LD for about page
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "IT1Stop",
        "url": import.meta.env.VITE_SITE_URL || "https://it1stop.com",
        "logo": "https://it1stop.com/wp-content/uploads/2021/05/logo.png",
        "foundingDate": "2015",
        "description": "IT1Stop is a trusted technology partner providing secure, scalable IT solutions for private organizations and government agencies nationwide.",
        "mission": "To deliver innovative, secure, and compliant IT solutions that empower organizations to achieve their digital transformation goals.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1225 W Beaver S St. Ste 205-1 #1079",
          "addressLocality": "Jacksonville",
          "addressRegion": "FL",
          "postalCode": "32204",
          "addressCountry": "US"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+13013320649",
          "contactType": "customer service",
          "email": "hr@it1stop.com"
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certification",
            "name": "ISO 27001 Certification"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certification",
            "name": "GDPR Compliance"
          }
        ]
      }
    });
    document.head.appendChild(schemaScript);

    // Update meta tags
    document.title = "About IT1Stop - Your Trusted Technology Partner";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about IT1Stop - a trusted technology partner providing secure, scalable IT solutions for private organizations and government agencies with ISO 27001 certification.');
    }

    return () => {
      document.head.removeChild(schemaScript);
    };
  }, []);

  return (
    <div>
      <Header />
      <AboutHero />
      <CompanyStory />
      <ValuesSection />
      <Footer />
    </div>
  );
}
