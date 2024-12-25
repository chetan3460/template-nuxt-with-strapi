'use strict';

/**
 * latest-post router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::latest-post.latest-post');
