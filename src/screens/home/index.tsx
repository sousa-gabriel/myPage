import {
  Hero,
  HeroGrid,
  Eyebrow,
  Title,
  Subtitle,
  Actions,
  PhotoWrap,
  Photo,
  Grid,
} from "./styles";
import {
  Button,
  Container,
  Layout,
  Section,
  SectionLead,
  SectionTitle,
  SkillCard,
} from "../../components";
import { Link } from "react-router-dom";
import gabriel from "../../assets/gabriel.png";
import { skills } from "../../constants/skills";

export function Home() {
  return (
    <Layout>
      <Hero>
        <Container>
          <HeroGrid>
            <div>
              <Eyebrow>Engenheiro de Software</Eyebrow>
              <Title>
                Gabriel <span>Rocha</span>
              </Title>
              <Subtitle>
                Desenvolvedor Mobile Senior — especialista em <strong>React Native</strong> &{" "}
                <strong>ReactJS</strong>. Desenvolvendo experiências mobile de alto impacto.
              </Subtitle>
              <Actions>
                <Link to="/contact">
                  <Button>Entre em contato</Button>
                </Link>
                <Link to="/skills">
                  <Button $variant="outline">Ver skills</Button>
                </Link>
              </Actions>
            </div>
            <PhotoWrap>
              <Photo src={gabriel} alt="Gabriel Rocha" />
            </PhotoWrap>
          </HeroGrid>
        </Container>
      </Hero>

      <Section>
        <Container>
          <SectionTitle>
            O que eu <span>faço</span>
          </SectionTitle>
          <SectionLead>
            Atuo na engenharia de aplicações mobile robustas, escaláveis e bem testadas — do design
            da arquitetura até o deploy contínuo.
          </SectionLead>
          <Grid>
            {skills.slice(0, 6).map((s) => (
              <SkillCard key={s.title} {...s} />
            ))}
          </Grid>
        </Container>
      </Section>
    </Layout>
  );
}
