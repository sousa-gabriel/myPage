import { Layout, Container, Section, SectionTitle, SectionLead } from "../../components";
import { Highlights, Prose } from "./styles";

export function About() {
  return (
    <Layout>
      <Section>
        <Container>
          <SectionTitle>
            Sobre <span>mim</span>
          </SectionTitle>
          <SectionLead>
            Engenheiro de software focado em mobile, performance e qualidade de código.
          </SectionLead>
          <Prose>
            <p>
              Sou <strong>Gabriel Rocha</strong>, desenvolvedor mobile senior com forte experiência
              em <strong>React Native</strong> e <strong>ReactJS</strong>. Construo aplicações de
              alto impacto priorizando arquitetura limpa, testes e experiência do usuário.
            </p>
            <p>
              Ao longo da carreira atuei em squads multidisciplinares, liderei revisões técnicas e
              contribuí para a evolução de bibliotecas internas.
            </p>
            <Highlights>
              <li>
                Mais de 5 anos desenvolvendo sites e aplicativos React Native e ReactJS em produção
              </li>
              <li>Forte conhecimento em testes unitários e arquitetura offline-first</li>
              <li>Experiência com MobX, Redux, WatermelonDB e CI/CD</li>
              <li>Mentoria técnica e cultura de code review</li>
            </Highlights>
          </Prose>
        </Container>
      </Section>
    </Layout>
  );
}
