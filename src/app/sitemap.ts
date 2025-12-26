import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vaibhavsinghal.dev'; // Replace with your actual domain

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/interview-experience`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamic routes from sections on the homepage
  const sections = ['about', 'journey', 'skills', 'projects-ai', 'key-projects', 'positions', 'awards', 'contact'];
  const dynamicRoutes = sections.map((section) => ({
    url: `${baseUrl}/#${section}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));


  return [...staticRoutes, ...dynamicRoutes];
}
