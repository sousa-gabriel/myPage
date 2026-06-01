import styled from "styled-components";

export const Prose = styled.div`
  max-width: 760px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 17px;
  p + p {
    margin-top: 18px;
  }
  strong {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Highlights = styled.ul`
  margin-top: 40px;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 14px;
  li {
    padding: 16px 20px;
    background: ${({ theme }) => theme.colors.bgAlt};
    border-left: 3px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.radius.md};
    color: ${({ theme }) => theme.colors.text};
  }
`;
