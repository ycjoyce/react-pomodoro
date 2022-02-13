import { ThemeProvider } from "styled-components";
import theme from "../src/styles/abstracts/theme";
import "normalize.css/normalize.css";
import "../src/styles/all.css";

export const decorators = [
  (story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>,
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
