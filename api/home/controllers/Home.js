'use strict';

/**
 * Home.js controller
 *
 * @description: A set of functions called "actions" for managing `Home`.
 */

module.exports = {

  /**
   * Retrieve home records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.home.search(ctx.query);
    } else {
      return strapi.services.home.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a home record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.home.fetch(ctx.params);
  },

  /**
   * Count home records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.home.count(ctx.query, populate);
  },

  /**
   * Create a/an home record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.home.add(ctx.request.body);
  },

  /**
   * Update a/an home record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.home.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an home record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.home.remove(ctx.params);
  }
};
