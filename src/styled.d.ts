// styled.d.ts
import "styled-components";
import { theme } from "./theme"; // importa tu theme.ts

// Esto le dice a styled-components cuál es la forma del theme
type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
