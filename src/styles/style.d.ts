import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      light: string;
      dark: string;
      black: string;
      emphasize: string;
    };
    font: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      small: string;
    };
  }
}
