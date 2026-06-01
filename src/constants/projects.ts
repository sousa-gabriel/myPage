export interface Project {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  tags: string[];
  images?: string[];
}

export const projects: Project[] = [
  {
    company: "BRQ Digital Solutions",
    role: "Desenvolvedor Sênior",
    period: "Jan 2025 — Presente",
    description:
      "Desenvolvimento mobile com React Native, focado em qualidade, performance e padronização de código em squads de alto impacto.",
    highlights: [
      "Mapeamento de demandas (demandas x trabalho)",
      "Testes unitários com Jest",
      "Gerenciamento de estado com MobX",
      "Code Review e ajustes em Lib interna",
      "Gerenciamento offline do app",
      "Leitura de código de barras",
      "Styled Components e Storybook",
    ],
    tags: ["React Native", "MobX", "Jest", "Styled Components", "Storybook"],
    images: [
      "https://play-lh.googleusercontent.com/No6PWu5w9InXSQAxVsOCVAovqXp-RGljzZ1Ka-ODxfj4TYxQFXG8eLZ2p7OwKjHfJf-U32UnTbgzbn4y-GH8=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/I123yI4XMbJ9bzvq9BCmlOIl1QLjsLj3Vt9Q5tyu1gkg6C0PKR4m9NKgjSruCSyLA8AjxhvcRAVMfPrumbRC_rk=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/r3zQFTmg-3dG-PZN-G_qBY6H1pULgqEg5LcAK3G1q45DkBoTuBJZ_b6xzUgMjkC6o6wbcPstA1sjOcciBxJKx_c=w2560-h1440-rw",
    ],
  },
  {
    company: "Platform Builders",
    role: "Engenheiro de Software",
    period: "Abr 2024 — Presente",
    description:
      "Atuação full mobile e web: React Native para apps e ReactJS com SSR (Vike e Next.js) para aplicações web de larga escala.",
    highlights: [
      "Desenvolvimento React Native e ReactJS",
      "SSR com Vike e Next.js",
      "Testes unitários com Jest",
      "Gerenciamento de estado com MobX",
      "Code Review e ajustes em Lib interna",
      "Storybook e Styled Components",
    ],
    tags: ["React Native", "ReactJS", "Next.js", "Vike", "MobX", "Storybook"],
    images: [
      "https://play-lh.googleusercontent.com/Gy43UlOqfIrnCIKNC-SKVloPAA6eNpGIP7yZ5OOq7XxkLOVvCv6RmHoWhjKEpO_E2Ls=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/CMXkPlgCQMTe6_zR03HziHFHRULkeS7QM-3fm0-yAM8kKUdw-gd22kkYT1vIj4kH2g=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/PRd3Mf-y822gpavL2F7CWOG4bDiswxg2Jvr5ItejU0McuK9z6v_RD4X5Z3AG7nacvxsM=w2560-h1440-rw",
    ],
  },
  {
    company: "PariPassu",
    role: "Desenvolvedor de Aplicativos Móveis",
    period: "Jul 2023 — Abr 2024",
    location: "Florianópolis, SC",
    description:
      "Desenvolvimento mobile com foco em sincronização offline-first usando WatermelonDB para aplicativos do agronegócio.",
    highlights: [
      "Desenvolvimento React Native",
      "Gerenciamento offline com WatermelonDB",
      "Leitura de código de barras",
      "Testes unitários com Jest",
      "Code Review e mapeamento de demandas",
    ],
    tags: ["React Native", "WatermelonDB", "Jest", "Offline-first"],
    images: [
      "https://play-lh.googleusercontent.com/gaZeGXKqyX0pNHMrIZElNn1G3ZvkVoCHFYtLx8wMbb2yckXTmJb5pO6X4ECgi3t8an0=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/JKhXLPQ6SJGconcCq7lEiH5q3CmYYurfFHkZgeVfI7S9vPJ-_SEASFmYWRqjDpDc_Kw=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/0E3_YEt1bTsPD91E5i4oG1Xy8bAaAdzq-wzwKCc8EEF4RengmibkykiHgpN0clpaA0M=w2560-h1440-rw",
    ],
  },
  {
    company: "Mater Imperium",
    role: "Desenvolvedor de Aplicativos Móveis",
    period: "Dez 2022 — Jul 2023",
    location: "São Paulo, SP",
    description:
      "Desenvolvimento mobile com pipeline completo de testes E2E e publicação automatizada nas lojas via CI/CD.",
    highlights: [
      "Desenvolvimento React Native",
      "Testes E2E com Detox",
      "Testes unitários com Jest",
      "Publicação nas lojas via CI/CD",
      "Criação de Lib interna",
      "Styled Components e Code Review",
    ],
    tags: ["React Native", "Detox", "Jest", "CI/CD", "Styled Components"],
    images: [
      "https://media.licdn.com/dms/image/v2/D4E22AQHz4761C9d6gw/feedshare-image-high-res/feedshare-image-high-res/0/1690564212827?e=1781740800&v=beta&t=0JidndGjTofw9JuPq73-tk80Y0AqveBcbpJ4OdYEy-k",
      "https://media.licdn.com/dms/image/v2/D4D22AQGBJAeFW_q65Q/feedshare-shrink_1280/feedshare-shrink_1280/0/1688747349671?e=1781740800&v=beta&t=5LfBinq1W8bh4Musc_45KF_6BHbgiW-ENIbD9BHXo8M",
    ],
  },
  {
    company: "onebrain (Fintech Nomad)",
    role: "Desenvolvedor React Native",
    period: "Set 2021 — Dez 2022",
    location: "São Paulo, SP",
    description:
      "Alocação na fintech Nomad para desenvolvimento mobile com gerenciamento de estado robusto via Redux e pipelines de entrega contínua.",
    highlights: [
      "Desenvolvimento React Native para fintech",
      "Gerenciamento de estado com Redux",
      "Publicação nas lojas via CI/CD",
      "Testes unitários com Jest",
      "Onboarding técnico de novos colegas",
      "Styled Components e Code Review",
    ],
    tags: ["React Native", "Redux", "Jest", "CI/CD", "Fintech"],
    images: [
      "https://play-lh.googleusercontent.com/6ACL26s7omTLrGnLsTmF7c_ns014q-Hsodk7xMSWx9STf62tudqCczXb8hZhd54ATN0=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/hGnCwSttjENEnTlV3kqhMpTmoSHSpZJ2llSqYIexEoxRmF6wyrNFu6ZezgvtQTPpz4s5mxho9JaLrpgGM1AN5w=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/8HdSqXra9qvL2L0VIxyE1hSTMjIEcrt8wgXrr1Jh0uARaQt2TrZaIGn2GvL3DoYVnueyTDaX6kgT35qQh7Pr=w2560-h1440-rw",
    ],
  },
  {
    company: "Grupo Dimed (Panvel)",
    role: "Desenvolvedor React Native",
    period: "Fev 2021 — Set 2021",
    location: "Rio Grande do Sul",
    description:
      "Desenvolvimento do app da Panvel em conjunto com a equipe do Grupo Dimed, contribuindo para uma das maiores redes de farmácias do Sul do Brasil.",
    highlights: [
      "Desenvolvimento do app Panvel",
      "Trabalho em equipe multidisciplinar",
      "Foco em experiência do usuário em varejo",
    ],
    tags: ["React Native", "Varejo", "Mobile"],
    images: [
      "https://play-lh.googleusercontent.com/rFy4mMeFvClTJsLLAwh21VNAY6RKihyJXc-hX0o5YQ0F0j6WbYqWsatCGo56EIqybLo=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/eATkcLglsujTS3hPuz56eCzZEhEb8vNiHrt0omi7i6Nzzc45xao7hn7MLHmih43dlqU=w2560-h1440-rw",
    ],
  },
  {
    company: "tafstore",
    role: "Desenvolvedor de Aplicativos Móveis",
    period: "Jan 2020 — Fev 2021",
    location: "Novo Hamburgo, RS",
    description:
      "Atuação ponta a ponta: do levantamento de requisitos e prototipação no Adobe XD até a entrega do app em React Native.",
    highlights: [
      "Análise e validação de regras de negócio",
      "Criação de layout no Adobe XD",
      "Validação de layout junto ao cliente",
      "Desenvolvimento de app em React Native",
    ],
    tags: ["React Native", "Adobe XD", "UX"],
    images: [
      "https://play-lh.googleusercontent.com/y7Yus4pAxxiAOUA5W2oxr4udrCETigHUxIvzo544YPw_lEZZTxNStViIAZGE1BffyTR70W-fI2IXEHIlxyvO2w=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/3iJpbwW2Z3B-bx4l4O9w8OMB-cIP-HFhx2aP9Np4cCNxrPR1G_kWQzLSXiCCzcvv4CuAEBLbIEhAZteLsdqrgw=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/_hsjjDklZPZe4XRGzVMWXW6KjndSXEt9AJBr_FxyV94zBs0_fMmPex62JCX4Ov6yGyKWrrPMX_43nwEbuWl5ig=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/wI22f4cQtK8kdfBs78PjkLlM4EZPWDsubRhAnkjaFxwuef3_RHC2bfpEK80Izv7_zwClIf98IUubz4h7bp-bew=w2560-h1440-rw",
    ],
  },
];
