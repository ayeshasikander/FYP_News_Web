'use strict';

/**
 * newspost service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newspost.newspost');
