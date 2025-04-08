// Constantes y funciones para SEO
export const DEFAULT_TITLE = 'IR Solar Design - Professional Solar Energy Solutions';
export const DEFAULT_DESCRIPTION = 'IR Solar Design offers top-quality solar panel installation, energy efficiency consulting, and renewable energy solutions for homes and businesses.';
export const DEFAULT_IMAGE = '/src/assets/IRLOGO.PNG';
export const SITE_URL = 'https://irsolardesigns.com'; // domionio real

export const getCanonicalUrl = (pathname: string): string => {
  return `${SITE_URL}${pathname}`;
};

export const getStructuredData = (name: string, image: string, url: string, description: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': name,
    'image': image,
    'url': url,
    'telephone': '+1-000-000-0000', // Reemplaza con tu teléfono real
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '123 Solar Street', // Reemplaza con tu dirección real
      'addressLocality': 'Solar City',
      'addressRegion': 'SC',
      'postalCode': '12345',
      'addressCountry': 'US'
    },
    'priceRange': '$$',
    'description': description
  };
};