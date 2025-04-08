import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { 
  DEFAULT_TITLE, 
  DEFAULT_DESCRIPTION, 
  DEFAULT_IMAGE, 
  SITE_URL,
  getCanonicalUrl,
  getStructuredData
} from '../utils/seoUtils';

// Tipo para las props
type SeoHeadProps = {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

// El componente SeoHead
const SeoHead: React.FC<SeoHeadProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  article = false
}) => {
  const { pathname } = useLocation();
  const canonical = getCanonicalUrl(pathname);
  const fullImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  
  const structuredData = getStructuredData(
    'IR Solar Designs',
    fullImageUrl,
    SITE_URL,
    description
  );

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      
      <meta property="og:site_name" content="IR Solar Design" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SeoHead;