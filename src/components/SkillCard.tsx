import styled from "styled-components";
import type { LucideIcon } from "lucide-react";

const Card = styled.article`
  background: ${({ theme }) => theme.colors.bgAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 28px;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.card};
  }
`;

const IconWrap = styled.div`
  width: 52px;
  height: 52px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  box-shadow: ${({ theme }) => theme.shadows.glow};
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Desc = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14.5px;
`;

export function SkillCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <IconWrap>
        <Icon size={26} />
      </IconWrap>
      <Title>{title}</Title>
      <Desc>{description}</Desc>
    </Card>
  );
}
