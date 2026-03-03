const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  // Eleventy v3 dropped native YAML support; re-add it for Decap CMS compatibility
  eleventyConfig.addDataExtension("yaml,yml", (contents) => yaml.load(contents));

  eleventyConfig.addPassthroughCopy("src/public");
  eleventyConfig.addPassthroughCopy("src/admin");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk"],
  };
};
