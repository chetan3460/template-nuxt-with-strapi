// import { defineSitemapEventHandler } from '#imports';

// export default defineSitemapEventHandler(async () => {
//     console.log('Sitemap handler is being triggered'); // Check if this log appears

//     try {
//         // Fetch data from your API
//         const res = await fetch('http://localhost:1337/api/sitemaps');
//         const data = await res.json();

//         console.log('Fetched API Data:', data); // This should print the data if the API call is successful

//         if (!data?.data) {
//             throw new Error('No data found from API');
//         }

//         // Map the data to create dynamic URLs
//         return data.data.map((item) => ({
//             loc: `/${item.PageURL}`,
//             lastmod: item.updatedAt || new Date().toISOString(),
//         }));
//     } catch (error) {
//         console.error('Error fetching or processing data:', error);
//         return [];
//     }
// });




// export default defineSitemapEventHandler(async () => {
//     console.log('Sitemap handler is being triggered'); // Check if this log appears

//     try {
//         // Fetch blogs with populated fields (Strapi v5 API request)
//         const res = await fetch('http://localhost:1337/api/blogs?populate=*');
//         const data = await res.json();

//         console.log('Fetched API Data:', data); // Log the full response for inspection

//         if (!data?.data || !Array.isArray(data.data) || data.data.length === 0) {
//             throw new Error('No blog posts found in the API response');
//         }

//         // Initialize an array to store URLs
//         const blogUrls = [];

//         // Loop through each blog and extract the URL
//         for (const blog of data.data) {
//             console.log('Processing blog:', blog); // Log each blog to inspect

//             const blogSlug = blog.slug; // Directly access the 'slug' on the blog object
//             if (!blogSlug) {
//                 console.warn('Slug is missing for blog:', blog);
//                 continue;
//             }

//             // Add the blog URL to the sitemap
//             blogUrls.push({
//                 loc: `/blog/${blogSlug}`, // URL pattern: /blog/{blogSlug}
//                 lastmod: blog.updatedAt || new Date().toISOString(), // Use blog's updatedAt or current date
//             });
//         }

//         // Check if no blog URLs were generated
//         if (blogUrls.length === 0) {
//             throw new Error('No blog URLs generated');
//         }

//         // Return the blog URLs as part of your sitemap
//         return blogUrls;
//     } catch (error) {
//         console.error('Error fetching or processing blog posts:', error);
//         return [];
//     }
// });
import { defineSitemapEventHandler } from '#imports';
import type { SitemapUrl } from '#sitemap/types';

export default defineSitemapEventHandler(async () => {
  try {
    const [posts, pages] = await Promise.all([
      // Fetch blogs
      $fetch<{ slug: string; updatedAt: string }[]>('http://localhost:1337/api/blogs?populate=*')
        .then(data =>
          data.map(blog => ({
            loc: `/blog/${blog.slug}`,
            lastmod: blog.updatedAt || new Date().toISOString(),
            _sitemap: 'posts',
          } satisfies SitemapUrl))
        ),
      // Fetch pages
      $fetch<{ PageURL: string; updatedAt: string }[]>('http://localhost:1337/api/sitemaps')
        .then(data =>
          data.map(page => ({
            loc: `/${page.PageURL}`,
            lastmod: page.updatedAt || new Date().toISOString(),
            _sitemap: 'pages',
          } satisfies SitemapUrl))
        ),
    ]);
    return [...posts, ...pages];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return [];
  }
});
