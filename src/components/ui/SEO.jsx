import { useEffect } from 'react';

const SEO = ({ title, description, canonicalUrl, noindex }) => {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
      document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    }

    // Update description
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
      document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
    }

    // Update canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalUrl) {
      if (!canonicalTag) {
        canonicalTag = document.createElement('link');
        canonicalTag.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.setAttribute('href', canonicalUrl);
      document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
    }

    // Handle noindex
    let robotsTag = document.querySelector('meta[name="robots"]');
    if (noindex) {
      if (!robotsTag) {
        robotsTag = document.createElement('meta');
        robotsTag.setAttribute('name', 'robots');
        document.head.appendChild(robotsTag);
      }
      robotsTag.setAttribute('content', 'noindex, nofollow');
    } else {
      if (robotsTag) {
        robotsTag.setAttribute('content', 'index, follow');
      } else {
        // If it wasn't there, and we want to index, explicitly add it
        robotsTag = document.createElement('meta');
        robotsTag.setAttribute('name', 'robots');
        robotsTag.setAttribute('content', 'index, follow');
        document.head.appendChild(robotsTag);
      }
    }
  }, [title, description, canonicalUrl, noindex]);

  return null;
};

export default SEO;
