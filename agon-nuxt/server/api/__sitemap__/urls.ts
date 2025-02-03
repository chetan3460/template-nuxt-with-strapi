import { defineSitemapEventHandler } from '#imports';
import type { SitemapUrl } from '#sitemap/types';

export default defineSitemapEventHandler(async () => {
  try {
    // Correct way to access strapiBaseUrl
 // Use runtime config instead of useNuxtApp()
 const strapiBaseUrl = useRuntimeConfig().public.STRAPI_BASE_URL ||
 (process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : 'https://agon-cms-strapi.onrender.com');
 //     console.log('Strapi Base URL:', strapiBaseUrl); // Debugging

    const [posts, pages] = await Promise.all([
      // Fetch blogs
      $fetch(`${strapiBaseUrl}/api/blogs?populate=*`)
        .then(response => {
          // console.log('Blog Response:', response);
          return response.data.map(blog => ({
            loc: `/blog/${blog.slug}`,
            lastmod: blog.updatedAt || new Date().toISOString(),
            _sitemap: 'posts',
          } satisfies SitemapUrl));
        }),

      // Fetch pages
      $fetch(`${strapiBaseUrl}/api/sitemaps`)
        .then(response => {
          // console.log('Page Response:', response);
          return response.data.map(page => ({
            loc: `/${page.PageURL}`,
            lastmod: page.updatedAt || new Date().toISOString(),
            _sitemap: 'pages',
          } satisfies SitemapUrl));
        }),
    ]);

    // console.log('Final Sitemap Data:', [...posts, ...pages]);
    return [...posts, ...pages];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return [];
  }
});
