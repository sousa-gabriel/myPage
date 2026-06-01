import styled from "styled-components";
import { Container } from "./Container";

const Wrap = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 32px 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  text-align: center;
`;

export function Footer() {
  return (
    <Wrap>
      <Container>© {new Date().getFullYear()} Gabriel Rocha — Engenheiro de Software</Container>
    </Wrap>
  );
}
