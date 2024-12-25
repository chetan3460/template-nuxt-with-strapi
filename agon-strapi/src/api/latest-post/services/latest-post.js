'use strict';

/**
 * latest-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::latest-post.latest-post');
