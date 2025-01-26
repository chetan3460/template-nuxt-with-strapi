// import { defineAsyncComponent, ref, computed } from 'vue';

// export function useDynamicComponents(apiEndpoint) {
//     const sitemap = ref(null);
//     const loadingMessage = ref('Loading or no data available...');
//     const route = useRoute();

//     // Resolve component dynamically
//     const resolveComponent = (componentName) => {
//         if (!componentName) return null;

//         const components = import.meta.glob('~/components/sections/About/**/*.vue');
//         const formattedName = componentName
//             .replace('page-blocks.', '')
//             .split('-')
//             .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
//             .join('');
//         const path = `/components/sections/About/${formattedName}.vue`;

//         const matchedComponent = components[path];
//         if (matchedComponent) {
//             return defineAsyncComponent(matchedComponent);
//         } else {
//             console.error(`Component not found for: ${componentName}. Expected path: ${path}`);
//             return null;
//         }
//     };

//     // Filter valid blocks
//     const filteredBlocks = computed(() => {
//         if (!sitemap.value || !Array.isArray(sitemap.value.Blocks)) return [];
//         return sitemap.value.Blocks.filter(
//             (block) => block && block.__component && resolveComponent(block.__component)
//         );
//     });


//     const fetchData = async (slug = 'homepage') => {
//         try {
//             const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
//             const response = await fetch(`${strapiBaseUrl}${apiEndpoint}?filters[PageURL][$eq]=${slug}&populate[seo][populate][ogImage]=true&populate[Blocks]=true`);
//             const data = await response.json();

//             console.log('API Response:', data);

//             if (response.ok && data?.data?.length > 0) {
//                 sitemap.value = data.data[0]; // Assign the first item from the response
//             }
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };



//     // Computed SEO metadata
//     const seoMetadata = computed(() => {
//         const metadata = sitemap.value?.seo || {};
//         const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

//         return {
//             title: metadata.metaTitle,
//             description: metadata.metaDescription,
//             keywords: metadata.keywords,
//             ogTitle: metadata.metaTitle,
//             ogDescription: metadata.metaDescription,
//             ogImage: metadata.ogImage?.url ? `${strapiBaseUrl}${metadata.ogImage.url}` : '/default-og-image.jpg',
//             ogSiteName: 'Agon',
//             twitterCard: 'summary_large_image',
//             twitterTitle: metadata.metaTitle,
//             twitterDescription: metadata.metaDescription,
//             twitterImage: metadata.ogImage?.url ? `${strapiBaseUrl}${metadata.ogImage.url}` : '/default-og-image.jpg',
//         };
//     });

//     // Update SEO metadata dynamically
//     watchEffect(() => {
//         if (sitemap.value) {
//             useSeoMeta(seoMetadata.value);
//         }
//     });

//     // Set body attributes
//     useHead({
//         bodyAttrs: {
//             class: "overflow-x-hidden w-screen relative",
//         },
//     });

//     return { sitemap, loadingMessage, filteredBlocks, resolveComponent, fetchData, route };
// }import { defineAsyncComponent, ref, computed, watchEffect } from 'vue';
