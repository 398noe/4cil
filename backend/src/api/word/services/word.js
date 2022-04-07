'use strict';

/**
 * word service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::word.word');
