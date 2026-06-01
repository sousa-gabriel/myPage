import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { margin: 0; padding: 0; min-height: 100%; }
  body {
    font-family: ${({ theme }) => theme.fonts.sans};
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
    line-height: 1.6;
  }
  a { color: inherit; text-decoration: none; }
  h1, h2, h3, h4 { margin: 0; line-height: 1.2; font-weight: 700; }
  p { margin: 0; }
  img { max-width: 100%; display: block; }
  button { font-family: inherit; cursor: pointer; border: none; background: none; color: inherit; }

  ::selection { background: ${({ theme }) => theme.colors.primary}; color: #fff; }
`;
