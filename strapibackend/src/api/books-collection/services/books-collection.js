'use strict';

/**
 * books-collection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::books-collection.books-collection');
