'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('date-range-picker')
      .service('myService')
      .getWelcomeMessage();
  },
});
