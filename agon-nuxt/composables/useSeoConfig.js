import { computed, watchEffect } from 'vue';
import { getImageUrl } from '~/utils/getImageUrl';

export function useSeoConfig(sitemap) {
    // Computed SEO metadata
    const seoMetadata = computed(() => {
        const metadata = sitemap.value?.seo || {};
        const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

        return {
            title: metadata.metaTitle,
            description: metadata.metaDescription,
            keywords: metadata.keywords,
            ogTitle: metadata.metaTitle,
            ogDescription: metadata.metaDescription,
            ogImage: metadata.ogImage?.url ? getImageUrl(metadata.ogImage.url) : '/default-og-image.jpg',
            ogSiteName: 'Agon',
            twitterCard: 'summary_large_image',
            twitterTitle: metadata.metaTitle,
            twitterDescription: metadata.metaDescription,
            twitterImage: metadata.ogImage?.url ? getImageUrl(metadata.ogImage.url) : '/default-og-image.jpg',
        };
    });

    // Update SEO metadata dynamically
    watchEffect(() => {
        if (sitemap.value) {
            useSeoMeta(seoMetadata.value);
        }
    });

    // Set body attributes
    useHead({
        bodyAttrs: {
            class: "overflow-x-hidden w-screen relative",
        },
    });

    return { seoMetadata };
}
