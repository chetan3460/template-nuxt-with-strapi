module.exports = () => ({
    "strapi-plugin-populate-deep": {
        config: {
            defaultDepth: 3,
            maxDepth: 10,
        },
    },
    seo: {
        enabled: true,
    },

    navigation: {
        enabled: true,
        config: {
            allowedContentTypes: ['api::sitemap.sitemap'], // Allow linking to the Sitemap collection type
        },
    },

});
