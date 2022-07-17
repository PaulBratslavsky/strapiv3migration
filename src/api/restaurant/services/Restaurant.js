// path: ./src/api/restaurant/services/restaurant.js

const { createCoreService } = require('@strapi/strapi').factories;
module.exports = createCoreService('api::restaurant.restaurant');
