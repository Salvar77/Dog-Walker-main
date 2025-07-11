// next-i18next.config.js
const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "pl", "es"],
    defaultLocale: "en",
  },
  localePath: path.resolve("./public/locales"),
};
