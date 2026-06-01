import { Container, Layout, Section, SectionTitle, SectionLead, SkillCard } from "../../components";
import { skills } from "../../constants/skills";
import { Grid } from "./styles";

export function Skills() {
  return (
    <Layout>
      <Section>
        <Container>
          <SectionTitle>
            Minhas <span>skills</span>
          </SectionTitle>
          <SectionLead>
            Conjunto de competências técnicas que aplico no dia a dia para entregar produtos mobile
            de qualidade.
          </SectionLead>
          <Grid>
            {skills.map((s) => (
              <SkillCard key={s.title} {...s} />
            ))}
          </Grid>
        </Container>
      </Section>
    </Layout>
  );
}
