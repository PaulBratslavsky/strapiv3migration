// path: ./src/api/universal/services/universal.js

const { createCoreService } = require('@strapi/strapi').factories;
module.exports = createCoreService('api::universal.universal');
