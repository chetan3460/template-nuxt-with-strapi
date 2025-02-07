// import { defineAsyncComponent, ref, computed } from 'vue';

// export function useDynamicComponents(apiEndpoint) {
//     const sitemap = ref(null);
//     const sitemapStore = reactive({ cache: {} }); // ✅ Cache to prevent unnecessary API calls
//     const route = useRoute();

//     // ✅ Load components eagerly to prevent flickering
//     const components = import.meta.glob('~/components/sections/About/**/*.vue', { eager: true });

//     const resolveComponent = (componentName) => {
//         if (!componentName) return null;

//         const formattedName = componentName
//             .replace('page-blocks.', '')
//             .split('-')
//             .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
//             .join('');
//         const path = `/components/sections/About/${formattedName}.vue`;

//         return components[path]?.default || components[path] || null;
//     };

//     const filteredBlocks = computed(() => {
//         if (!sitemap.value || !Array.isArray(sitemap.value.Blocks)) return [];
//         return sitemap.value.Blocks.filter(
//             (block) => block && block.__component && resolveComponent(block.__component)
//         );
//     });

//     const fetchData = async (slug = 'homepage') => {
//         if (sitemapStore.cache[slug]) {
//             sitemap.value = sitemapStore.cache[slug]; // ✅ Use cached data
//             return;
//         }

//         try {
//             const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

//             // ✅ Use `$fetch()` instead of `useFetch()`
//             const data = await $fetch(`${strapiBaseUrl}${apiEndpoint}`, {
//                 query: {
//                     'filters[PageURL][$eq]': slug,
//                     'populate': '*'
//                 }
//             });

//             if (data?.data?.length > 0) {
//                 sitemapStore.cache[slug] = data.data[0]; // ✅ Store in cache
//                 sitemap.value = data.data[0];
//             }
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     return { sitemap, filteredBlocks, resolveComponent, fetchData, route };
// }


import { defineAsyncComponent, computed } from 'vue';
import { useSitemapStore } from '~/stores/sitemapStore';

export function useDynamicComponents() {
    const sitemapStore = useSitemapStore();
    const sitemap = computed(() => sitemapStore.cache[useRoute().params.slug || 'homepage']);
    const route = useRoute();

    const components = import.meta.glob('~/components/sections/About/**/*.vue', { eager: true });

    const resolveComponent = (componentName) => {
        if (!componentName) return null;

        const formattedName = componentName
            .replace('page-blocks.', '')
            .split('-')
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join('');
        const path = `/components/sections/About/${formattedName}.vue`;

        return components[path]?.default || components[path] || null;
    };

    const filteredBlocks = computed(() => {
        if (!sitemap.value || !Array.isArray(sitemap.value.Blocks)) return [];
        return sitemap.value.Blocks.filter(
            (block) => block && block.__component && resolveComponent(block.__component)
        );
    });

    return { sitemap, filteredBlocks, resolveComponent, route };
}
