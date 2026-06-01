import { ThemeProvider } from "styled-components";
import type { ReactNode } from "react";
import { theme } from "../../theme/theme";
import { GlobalStyle } from "../../theme/GlobalStyle";
import { Header } from "../header";
import { Footer } from "../footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
