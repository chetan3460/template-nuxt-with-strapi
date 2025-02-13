import { d as defineSitemapEventHandler, u as useRuntimeConfig } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'vue';
import 'consola/core';
import 'node:url';
import 'ipx';

const urls = defineSitemapEventHandler(async () => {
  try {
    const strapiBaseUrl = useRuntimeConfig().public.STRAPI_BASE_URL || (false ? "http://localhost:1337" : "https://agon-cms-strapi.onrender.com");
    const [posts, pages] = await Promise.all([
      // Fetch blogs
      $fetch(`${strapiBaseUrl}/api/blogs?populate=*`).then((response) => {
        return response.data.map((blog) => ({
          loc: `/blog/${blog.slug}`,
          lastmod: blog.updatedAt || (/* @__PURE__ */ new Date()).toISOString(),
          _sitemap: "posts"
        }));
      }),
      // Fetch pages
      $fetch(`${strapiBaseUrl}/api/sitemaps`).then((response) => {
        return response.data.map((page) => ({
          loc: `/${page.PageURL}`,
          lastmod: page.updatedAt || (/* @__PURE__ */ new Date()).toISOString(),
          _sitemap: "pages"
        }));
      })
    ]);
    return [...posts, ...pages];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [];
  }
});

export { urls as default };
//# sourceMappingURL=urls.mjs.map
