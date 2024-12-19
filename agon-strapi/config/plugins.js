module.exports = () => ({
    "strapi-plugin-populate-deep": {
        config: {
            defaultDepth: 3,
        },
    },
    '@_sh/strapi-plugin-ckeditor': {
        enabled: true,
        config: {
            editor: {
                toolbar: [
                    'heading', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'imageUpload',
                ],
                language: 'en',
                // Additional CKEditor options here
            },
        },
    },

});
