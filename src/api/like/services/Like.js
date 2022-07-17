// path: ./src/api/like/services/like.js

const { createCoreService } = require('@strapi/strapi').factories;
module.exports = createCoreService('api::like.like');
