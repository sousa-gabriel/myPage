import "styled-components";
import { theme, Theme } from "../theme/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
