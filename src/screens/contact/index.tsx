import { Card, Grid, IconBox, Label, Value, TextContainer } from "./styles";
import { Container, Layout, Section, SectionLead, SectionTitle } from "../../components";
import { items } from "../../constants/about";

export function Contact() {
  return (
    <Layout>
      <Section>
        <Container>
          <SectionTitle>
            Entre em <span>contato</span>
          </SectionTitle>
          <SectionLead>
            Vamos conversar sobre seu próximo projeto mobile? Escolha o canal de sua preferência.
          </SectionLead>
          <Grid>
            {items.map((it) => (
              <Card key={it.label} href={it.href} target="_blank" rel="noreferrer">
                <IconBox>
                  <it.icon size={22} />
                </IconBox>
                <TextContainer>
                  <Label>{it.label}</Label>
                  <Value>{it.value}</Value>
                </TextContainer>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </Layout>
  );
}
