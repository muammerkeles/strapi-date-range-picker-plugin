'use strict';

module.exports = ({ strapi }) => {
  // register phase
  strapi.customFields.register({
    name: "date-range-picker",
    plugin: "strapi-date-range-picker-plugin",
    type: "text",
    inputSize: {
      // optional
      default: 4,
      isResizable: true,
    },
  });
};
