'use strict';

module.exports = ({ strapi }) => {
  // register phase
  strapi.customFields.register({
    name: "date-range",
    plugin: "date-range-picker",
    type: "text",
    inputSize: {
      // optional
      default: 4,
      isResizable: true,
    },
  });
};
