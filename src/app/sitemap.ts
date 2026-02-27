
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vaibhav-singhal.netlify.app/'; // Replace with your actual domain

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/interview-experience`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/query`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
     {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ];

  // Dynamic routes from sections on the homepage
  const sections = ['about', 'journey', 'skills', 'positions', 'awards', 'contact'];
  const dynamicRoutes = sections.map((section) => ({
    url: `${baseUrl}/#${section}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));


  return [...staticRoutes, ...dynamicRoutes];
}
