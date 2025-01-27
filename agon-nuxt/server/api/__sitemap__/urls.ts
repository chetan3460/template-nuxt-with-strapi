



import { defineSitemapEventHandler } from '#imports';
import type { SitemapUrl } from '#sitemap/types';

export default defineSitemapEventHandler(async () => {
  try {
    // Fetch data for blogs and pages
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

    const [posts, pages] = await Promise.all([
      // Fetch blogs
      $fetch(`${strapiBaseUrl}/api/blogs?populate=*`)
        .then(response => {
          const data = response.data;  // Access the array within 'data'
          return data.map(blog => ({
            loc: `/blog/${blog.slug}`,
            lastmod: blog.updatedAt || new Date().toISOString(),
            _sitemap: 'posts',
          } satisfies SitemapUrl));
        }),
    
      // Fetch pages
      $fetch(`${strapiBaseUrl}/api/sitemaps`)
        .then(response => {
          const data = response.data;  // Access the array within 'data'
          return data.map(page => ({
            loc: `/${page.PageURL}`,
            lastmod: page.updatedAt || new Date().toISOString(),
            _sitemap: 'pages',
          } satisfies SitemapUrl));
        }),
    ]);
    

    // Return combined results
    return [...posts, ...pages];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return [];
  }
});
