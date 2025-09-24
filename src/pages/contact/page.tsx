
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ContactHero from './components/ContactHero';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';

export default function ContactPage() {
  useEffect(() => {
    // Add Schema.org JSON-LD for contact page
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact IT1Stop",
      "description": "Get in touch with IT1Stop for your technology needs. Contact information and project inquiry form.",
      "url": `${import.meta.env.VITE_SITE_URL || "https://it1stop.com"}/contact`,
      "mainEntity": {
        "@type": "Organization",
        "name": "IT1Stop",
        "email": "hr@it1stop.com",
        "telephone": "+13013320649",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1225 W Beaver S St. Ste 205-1 #1079",
          "addressLocality": "Jacksonville",
          "addressRegion": "FL",
          "postalCode": "32204",
          "addressCountry": "US"
        },
        "openingHours": "Mo-Fr 09:00-17:00",
        "contactType": "customer service"
      }
    });
    document.head.appendChild(schemaScript);

    // Update meta tags
    document.title = "Contact IT1Stop - Get Your IT Project Started Today";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact IT1Stop for your technology needs. Get a free consultation and project proposal. Email hr@it1stop.com or call for immediate assistance.');
    }

    return () => {
      document.head.removeChild(schemaScript);
    };
  }, []);

  return (
    <div>
      <Header />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </div>
  );
}
