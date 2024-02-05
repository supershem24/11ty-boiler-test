// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("blogPost", function(name, link) {
    return`<section class="blogHolder">
    <a href="${link}" title="${name}">${name}</a>
    </section>`
  });

};