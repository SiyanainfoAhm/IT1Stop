
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Differentiators from './components/Differentiators';
import FeaturedProjects from './components/FeaturedProjects';
import ContactCTA from './components/ContactCTA';

export default function HomePage() {
  useEffect(() => {
    // Add Schema.org JSON-LD for homepage
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "IT1Stop",
      "url": import.meta.env.VITE_SITE_URL || "https://it1stop.com",
      "logo": "https://it1stop.com/wp-content/uploads/2021/05/logo.png",
      "description": "Secure IT solutions for private organizations and government agencies",
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
        "contactType": "customer service"
      },
      "sameAs": [
        "https://it1stop.com/"
      ],
      "foundingDate": "2015",
      "numberOfEmployees": "50-100",
      "industry": "Information Technology"
    });
    document.head.appendChild(schemaScript);

    // Update meta tags
    document.title = "IT1Stop - Secure IT Solutions for Private & Government Clients";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Trusted IT services provider delivering secure, scalable solutions for enterprises and government agencies. Mobile apps, web development, custom software with ISO 27001 compliance.');
    }

    return () => {
      document.head.removeChild(schemaScript);
    };
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <FeaturedProjects />
      <Differentiators />
      <ContactCTA />
      <Footer />
    </div>
  );
}
