import { breakpoints } from "./variables";

export const rwd = (
  breakpoint: keyof typeof breakpoints,
  up: boolean = false,
  portrait: boolean = false
) =>
  `@media screen and (${up ? "min" : "max"}-width: ${breakpoints[breakpoint]})${
    portrait ? " and (orientation: portrait)" : ""
  }`;

export const mobile = `${rwd("sm")} and (orientation: portrait)`;

export const mobileLandscape = `@media screen and (max-height: 600px) and (orientation: landscape)`;
