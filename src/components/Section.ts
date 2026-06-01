import styled from "styled-components";

export const Section = styled.section`
  padding: 96px 0;
  @media (max-width: 768px) { padding: 64px 0; }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(28px, 4vw, 42px);
  margin-bottom: 16px;
  span { color: ${({ theme }) => theme.colors.primary}; }
`;

export const SectionLead = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 17px;
  max-width: 680px;
  margin-bottom: 56px;
`;
