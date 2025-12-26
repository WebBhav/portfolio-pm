
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://vaibhav-singhal.netlify.app/'; // Replace with your actual domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Example: Disallow crawling of API routes
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
