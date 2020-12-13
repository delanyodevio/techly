const rssPlugin = require("@11ty/eleventy-plugin-rss");

// Import filters
const dateFilter = require("./src/filters/date-filter.js");
const w3DateFilter = require("./src/filters/w3-date-filter.js");

module.exports = function (config) {
  // Filters
  config.addFilter("dateFilter", dateFilter);
  config.addFilter("w3DateFilter", w3DateFilter);

  // Passthrough copy
  config.addPassthroughCopy("src/fonts");
  config.addPassthroughCopy("src/webfonts");
  config.addPassthroughCopy("src/icons");
  config.addPassthroughCopy("src/ebooks");
  config.addPassthroughCopy("src/scripts");
  config.addPassthroughCopy("src/css");
  config.addPassthroughCopy("src/admin");
  config.addPassthroughCopy("src/robots.txt");

  // Plugins
  config.addPlugin(rssPlugin);

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
