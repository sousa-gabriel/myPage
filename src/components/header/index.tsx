import { useState } from "react";
import styled from "styled-components";
import { Menu, X } from "lucide-react";
import { Container } from "../container";
import { Link } from "react-router-dom";

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(12px);
  background: rgba(10, 22, 40, 0.85);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
`;

const Brand = styled(Link)`
  font-weight: 800;
  font-size: 20px;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 2px;
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
  font-family: "Inter", sans-serif;
`;

const Nav = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.bgAlt};
    padding: 24px;
    gap: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    display: ${({ $open }) => ($open ? "flex" : "none")};
  }
`;

const NavLink = styled(Link)`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color 0.2s;
  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Toggle = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: inline-flex;
  }
`;

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Sobre" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projetos" },
  { to: "/contact", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Bar>
      <Container>
        <Inner>
          <Brand to="/" onClick={() => setOpen(false)}>
            G<span>R</span>M
          </Brand>
          <Nav $open={open}>
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            ))}
          </Nav>
          <Toggle onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </Toggle>
        </Inner>
      </Container>
    </Bar>
  );
}
