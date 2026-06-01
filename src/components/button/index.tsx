import styled, { css } from "styled-components";

type Variant = "primary" | "outline";

export const Button = styled.button<{ $variant?: Variant; $as?: "a" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: ${({ theme }) => theme.radius.full};
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.2px;
  transition: all 0.25s ease;

  ${({ $variant = "primary", theme }) =>
    $variant === "primary"
      ? css`
          background: ${theme.colors.primary};
          color: #fff;
          box-shadow: ${theme.shadows.glow};
          &:hover {
            background: ${theme.colors.primaryHover};
            transform: translateY(-2px);
          }
        `
      : css`
          background: transparent;
          color: ${theme.colors.text};
          border: 1.5px solid ${theme.colors.primary};
          &:hover {
            background: ${theme.colors.primary};
            color: #fff;
          }
        `}
`;
