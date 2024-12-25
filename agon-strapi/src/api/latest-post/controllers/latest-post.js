'use strict';

/**
 * latest-post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::latest-post.latest-post');
