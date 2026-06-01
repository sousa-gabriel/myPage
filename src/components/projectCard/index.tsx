import { useState } from "react";
import styled from "styled-components";
import { Briefcase, MapPin, Calendar, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import type { Project } from "../../constants/projects";

const Card = styled.article`
  background: ${({ theme }) => theme.colors.bgAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  min-height: 460px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0.6;
    transition: opacity 0.3s ease;
    z-index: 2;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.card};
    &::before {
      opacity: 1;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    min-height: 0;
  }
`;

const Body = styled.div`
  padding: 32px;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 24px;
  }
`;

const Company = styled.h3`
  font-size: 22px;
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Role = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 15px;
  margin: 6px 0 12px;
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13.5px;
  margin-bottom: 18px;
  span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Desc = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 15px;
  line-height: 1.65;
  margin-bottom: 18px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: grid;
  gap: 8px;
  li {
    position: relative;
    padding-left: 20px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 14.5px;
    &::before {
      content: "▸";
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 600;
  padding: 5px 12px;
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(249, 115, 22, 0.12);
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(249, 115, 22, 0.25);
`;

/* ---------- Carrossel ---------- */

const CarouselWrap = styled.div`
  position: relative;
  background:
    radial-gradient(circle at 30% 20%, rgba(249, 115, 22, 0.25), transparent 60%),
    linear-gradient(135deg, #0a1628 0%, #122544 100%);
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
  min-height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    border-left: none;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    aspect-ratio: 16 / 10;
  }
`;

const Track = styled.div<{ $index: number }>`
  display: flex;
  height: 100%;
  width: 100%;
  transform: translateX(${({ $index }) => `-${$index * 100}%`});
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
`;

const Slide = styled.div`
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const Empty = styled.div`
  width: 100%;
  height: 100%;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13.5px;
  text-align: center;
  padding: 24px;
  svg {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.7;
  }
`;

const NavBtn = styled.button<{ $side: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${({ $side }) => $side}: 12px;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(10, 22, 40, 0.75);
  backdrop-filter: blur(6px);
  color: ${({ theme }) => theme.colors.text};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 3;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Dots = styled.div`
  position: absolute;
  bottom: 14px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  z-index: 3;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "22px" : "8px")};
  height: 8px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : "rgba(255,255,255,0.35)"};
  transition: all 0.25s ease;
`;

const Counter = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(10, 22, 40, 0.75);
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  z-index: 3;
`;

function Carousel({ images, company }: { images: string[]; company: string }) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  if (total === 0) {
    return (
      <CarouselWrap>
        <Empty>
          <ImageIcon size={36} />
          <span>Imagens em breve</span>
        </Empty>
      </CarouselWrap>
    );
  }

  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  return (
    <CarouselWrap>
      <Track $index={index}>
        {images.map((src, i) => (
          <Slide key={i}>
            <img src={src} alt={`${company} — imagem ${i + 1}`} loading="lazy" />
          </Slide>
        ))}
      </Track>

      {total > 1 && (
        <>
          <NavBtn $side="left" onClick={() => go(-1)} aria-label="Imagem anterior">
            <ChevronLeft size={20} />
          </NavBtn>
          <NavBtn $side="right" onClick={() => go(1)} aria-label="Próxima imagem">
            <ChevronRight size={20} />
          </NavBtn>
          <Counter>
            {index + 1} / {total}
          </Counter>
          <Dots>
            {images.map((_, i) => (
              <Dot
                key={i}
                $active={i === index}
                onClick={() => setIndex(i)}
                aria-label={`Ir para imagem ${i + 1}`}
              />
            ))}
          </Dots>
        </>
      )}
    </CarouselWrap>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <Body>
        <Company>
          <Briefcase size={20} />
          {project.company}
        </Company>
        <Role>{project.role}</Role>
        <Meta>
          <span>
            <Calendar size={14} /> {project.period}
          </span>
          {project.location && (
            <span>
              <MapPin size={14} /> {project.location}
            </span>
          )}
        </Meta>
        <Desc>{project.description}</Desc>
        <List>
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </List>
        <Tags>
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </Tags>
      </Body>
      <Carousel images={project.images ?? []} company={project.company} />
    </Card>
  );
}
