import { Grid } from "./styles";
import {
  Container,
  Layout,
  Section,
  SectionLead,
  SectionTitle,
  ProjectCard,
} from "../../components";
import { projects } from "../../constants/projects";

export function Projects() {
  return (
    <Layout>
      <Section>
        <Container>
          <SectionTitle>
            Meus <span>Projetos</span>
          </SectionTitle>
          <SectionLead>
            Uma linha do tempo das empresas e produtos em que atuei, com foco em desenvolvimento
            mobile (React Native) e web (ReactJS).
          </SectionLead>
          <Grid>
            {projects.map((p) => (
              <ProjectCard key={p.company} project={p} />
            ))}
          </Grid>
        </Container>
      </Section>
    </Layout>
  );
}
