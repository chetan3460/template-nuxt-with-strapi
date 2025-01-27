import { ref, computed, watchEffect, defineAsyncComponent } from 'vue';
import { j as useRoute, e as useNuxtApp, k as useSeoMeta, g as useHead } from './server.mjs';

function useDynamicComponents(apiEndpoint) {
  const sitemap = ref(null);
  const loadingMessage = ref("Loading or no data available...");
  const route = useRoute();
  const resolveComponent = (componentName) => {
    if (!componentName) return null;
    const components = /* @__PURE__ */ Object.assign({ "/components/sections/About/CardBlockLayoutTwo.vue": () => import('./CardBlockLayoutTwo-rvUDlke1.mjs'), "/components/sections/About/CardsBlock.vue": () => import('./CardsBlock-BOAy_G8w.mjs'), "/components/sections/About/ContactUs.vue": () => import('./ContactUs-D26PqnWQ.mjs'), "/components/sections/About/ContentImageBlock.vue": () => import('./ContentImageBlock-CHTcg4BT.mjs'), "/components/sections/About/FaqBlock.vue": () => import('./FaqBlock-Bb3Syfp0.mjs'), "/components/sections/About/HeroAboutBlock.vue": () => import('./HeroAboutBlock-Dq75WEvm.mjs'), "/components/sections/About/PartnerBlock.vue": () => import('./PartnerBlock-qkPkD9mG.mjs'), "/components/sections/About/ProcessBlock.vue": () => import('./ProcessBlock-B579Y_M4.mjs'), "/components/sections/About/Section2.vue": () => import('./Section2-CKyk0BBi.mjs'), "/components/sections/About/ServicePageBannerBlock.vue": () => import('./ServicePageBannerBlock-DiOJvKmi.mjs'), "/components/sections/About/TwoColImageContentBlock.vue": () => import('./TwoColImageContentBlock-Bfq4nd7N.mjs') });
    const formattedName = componentName.replace("page-blocks.", "").split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join("");
    const path = `/components/sections/About/${formattedName}.vue`;
    const matchedComponent = components[path];
    if (matchedComponent) {
      return defineAsyncComponent(matchedComponent);
    } else {
      console.error(`Component not found for: ${componentName}. Expected path: ${path}`);
      return null;
    }
  };
  const filteredBlocks = computed(() => {
    if (!sitemap.value || !Array.isArray(sitemap.value.Blocks)) return [];
    return sitemap.value.Blocks.filter(
      (block) => block && block.__component && resolveComponent(block.__component)
    );
  });
  const fetchData = async (slug = "homepage") => {
    var _a;
    try {
      const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
      const response = await fetch(`${strapiBaseUrl}${apiEndpoint}?filters[PageURL][$eq]=${slug}&populate[seo][populate][ogImage]=true&populate[Blocks]=true`);
      const data = await response.json();
      console.log("API Response:", data);
      if (response.ok && ((_a = data == null ? void 0 : data.data) == null ? void 0 : _a.length) > 0) {
        sitemap.value = data.data[0];
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const seoMetadata = computed(() => {
    var _a, _b, _c;
    const metadata = ((_a = sitemap.value) == null ? void 0 : _a.seo) || {};
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    return {
      title: metadata.metaTitle,
      description: metadata.metaDescription,
      keywords: metadata.keywords,
      ogTitle: metadata.metaTitle,
      ogDescription: metadata.metaDescription,
      ogImage: ((_b = metadata.ogImage) == null ? void 0 : _b.url) ? `${strapiBaseUrl}${metadata.ogImage.url}` : "/default-og-image.jpg",
      ogSiteName: "Agon",
      twitterCard: "summary_large_image",
      twitterTitle: metadata.metaTitle,
      twitterDescription: metadata.metaDescription,
      twitterImage: ((_c = metadata.ogImage) == null ? void 0 : _c.url) ? `${strapiBaseUrl}${metadata.ogImage.url}` : "/default-og-image.jpg"
    };
  });
  watchEffect(() => {
    if (sitemap.value) {
      useSeoMeta(seoMetadata.value);
    }
  });
  useHead({
    bodyAttrs: {
      class: "overflow-x-hidden w-screen relative"
    }
  });
  return { sitemap, loadingMessage, filteredBlocks, resolveComponent, fetchData, route };
}

export { useDynamicComponents as u };
//# sourceMappingURL=useDynamicComponents-CbeC4ghp.mjs.map
