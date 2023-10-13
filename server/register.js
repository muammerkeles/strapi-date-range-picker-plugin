'use strict';

module.exports = ({ strapi }) => {
  // register phase
  strapi.customFields.register({
    name: "date-range-pickert",
    plugin: "strapi-date-range-picker-plugin",
    type: "string",
    inputSize: {
      // optional
      default: 4,
      isResizable: true,
    },
  });
};
