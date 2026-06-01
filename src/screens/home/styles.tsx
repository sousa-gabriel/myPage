import styled from "styled-components";

export const Hero = styled.section`
  position: relative;
  padding: 80px 0 96px;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: -20%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.colors.primaryGlow} 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 64px;
  align-items: center;
  position: relative;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const Eyebrow = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 18px;
`;

export const Title = styled.h1`
  font-size: clamp(36px, 6vw, 64px);
  font-weight: 800;
  margin-bottom: 18px;
  line-height: 1.05;
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 18px;
  margin-bottom: 32px;
  max-width: 540px;
  @media (max-width: 900px) {
    margin-inline: auto;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const PhotoWrap = styled.div`
  position: relative;
  justify-self: center;
  width: min(420px, 100%);
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 6px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, transparent 70%);
  box-shadow: ${({ theme }) => theme.shadows.glow};
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.bgAlt};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
`;
