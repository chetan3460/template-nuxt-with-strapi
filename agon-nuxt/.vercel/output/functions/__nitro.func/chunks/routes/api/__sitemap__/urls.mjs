import { d as defineSitemapEventHandler } from '../../../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind';
import 'devalue';
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
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    const [posts, pages] = await Promise.all([
      // Fetch blogs
      $fetch(`${strapiBaseUrl}/api/blogs?populate=*`).then((response) => {
        const data = response.data;
        return data.map((blog) => ({
          loc: `/blog/${blog.slug}`,
          lastmod: blog.updatedAt || (/* @__PURE__ */ new Date()).toISOString(),
          _sitemap: "posts"
        }));
      }),
      // Fetch pages
      $fetch(`${strapiBaseUrl}/api/sitemaps`).then((response) => {
        const data = response.data;
        return data.map((page) => ({
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
