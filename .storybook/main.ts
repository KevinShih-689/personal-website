import type { StorybookConfig } from "@storybook/nextjs";
import path from 'path';
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "storybook-css-modules",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  webpackFinal: async (config:any) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [
                path.join(__dirname, '../src/app'),
                path.join(__dirname, '../src/stories')
              ]
            }
          }
        }
      ],
      include: path.resolve(__dirname, '../app')
    });

    return config;
  },
};
export default config;
