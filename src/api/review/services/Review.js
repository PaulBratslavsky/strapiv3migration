// path: ./src/api/review/services/review.js

const { createCoreService } = require('@strapi/strapi').factories;
module.exports = createCoreService('api::review.review');


// custom service
// module.exports = (
//   {
//     strapi
//   }
// ) => {
//   return {
//     // Get review note from review's note
//     average: review => {
//       return strapi
//         .query('review')
//         .model.query(function(qb) {
//           qb.avg('note as note');
//           qb.where('review', '=', review);
//         })
//         .fetch()
//         .then(res => res.get('note'));
//     }
//   };
// };
