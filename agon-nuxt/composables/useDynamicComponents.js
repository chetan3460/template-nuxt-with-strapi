
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
