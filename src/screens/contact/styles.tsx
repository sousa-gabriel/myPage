import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
`;

export const Card = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 22px;
  background: ${({ theme }) => theme.colors.bgAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  transition: all 0.25s;
  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const IconBox = styled.div`
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  flex-shrink: 0;
`;

export const Label = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const TextContainer = styled.div`
  flex: 1;
  min-width: 0;
`;

export const Value = styled.div`
  font-weight: 600;
  font-size: 15px;

  word-break: break-word;
  overflow-wrap: break-word;
`;
