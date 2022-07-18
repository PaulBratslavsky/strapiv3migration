'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */

  // need to update resolver 
  register({ strapi }) {
    const extensionService = strapi.service('plugin::graphql.extension');
    extensionService.use(({ strapi }) => ({
      typeDefs: `
        type Query {
            restaurants(
                filters: RestaurantFiltersInput
                pagination: PaginationArg = {}
                sort: [String] = []
                publicationState: PublicationState = LIVE
                ): RestaurantEntityResponseCollection  
            }
        `,
      resolvers: {
        Query: {
          restaurants: {
            resolve: async (parent, args, context) => {
              const { toEntityResponseCollection } =
                strapi.service('plugin::graphql.format').returnTypes;

              const data = await strapi.services['api::restaurant.restaurant'].find();
              const response = toEntityResponseCollection(data.results);

              console.log('##################', response, '##################');
              return response;
            },
          },
        },
      },
    }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
