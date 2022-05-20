module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links/register",
    "@storybook/addon-essentials/register",
    "@storybook/addon-interactions/register"
  ],
  "framework": "@storybook/react"
}
