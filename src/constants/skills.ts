import {
  ClipboardCheck,
  Map,
  Library,
  Rocket,
  Workflow,
  Database,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Skill {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const skills: Skill[] = [
  {
    icon: ClipboardCheck,
    title: "Code Review & Quality",
    description: "Revisão criteriosa de código e padrões para garantir qualidade e manutenibilidade.",
  },
  {
    icon: Map,
    title: "Demand Mapping",
    description: "Levantamento e mapeamento de demandas técnicas alinhadas ao produto.",
  },
  {
    icon: Library,
    title: "Library Development",
    description: "Criação de bibliotecas reutilizáveis para acelerar squads e padronizar soluções.",
  },
  {
    icon: Rocket,
    title: "CI/CD Deployment",
    description: "Pipelines automatizadas para entrega contínua de apps React Native e Web.",
  },
  {
    icon: Workflow,
    title: "State Management",
    description: "Arquitetura de estado robusta com MobX e Redux em aplicações de larga escala.",
  },
  {
    icon: Database,
    title: "Offline Data Management",
    description: "Persistência e sincronização offline com WatermelonDB para apps mobile.",
  },
];
