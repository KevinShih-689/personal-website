import * as React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "next-themes";
import '../src/app/variables.module.scss';
import '../src/app/globals.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider
        enableSystem
        disableTransitionOnChange
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
