export interface ServiceSummary {
  slug: string;
  title: string;
  description: string;
  icon: string;
  checklist: string[];
  tags: string[];
  href: string;
}

export interface ServiceDetail {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  checklist: string[];
  image: string;
  process: { title: string; desc: string }[];
  cta: { headline: string; text: string };
}

export const serviceSummaries: ServiceSummary[] = [
  {
    slug: "pastrim",
    title: "Pastrim Profesional",
    description:
      "Pastrim ditor, industrial, pas ndërtimit dhe qendra tregtare me pajisje të avancuara dhe protokolle SLA.",
    icon: "building",
    checklist: ["Pastrim ditor dhe thellë", "Pajisje profesionale", "Raportim dixhital"],
    tags: ["B2B", "SLA", "Higjienë"],
    href: "/sherbimet/pastrim",
  },
  {
    slug: "facility",
    title: "Menaxhimi i Objekteve",
    description:
      "Mirëmbajtje teknike e plotë, furnizim materialesh, supervizim i vazhdueshëm dhe raportim transparent.",
    icon: "monitor",
    checklist: ["Mirëmbajtje teknike", "Materiale dhe furnizime", "Supervizim dhe raportim"],
    tags: ["B2B", "24/7", "SLA"],
    href: "/sherbimet/facility",
  },
  {
    slug: "dezinfektim",
    title: "Dezinfektim & Sanitizim",
    description:
      "Protokolle të rrepta për objekte shëndetësore, ushqimore dhe ambiente me kërkesa të larta higjienike.",
    icon: "activity",
    checklist: ["Produkte të certifikuara", "Dokumentacion i plotë", "Ekip i specializuar"],
    tags: ["Certifikim", "SLA", "B2B"],
    href: "/sherbimet/dezinfektim",
  },
  {
    slug: "oncall",
    title: "Gatishmëri / Emergjencë",
    description:
      "Gatishmëri e plotë 24/7 për intervenime urgjente, shërbime sezonale dhe situata të papritura.",
    icon: "clock",
    checklist: ["Gatishmëri 24/7", "Emergjenca dhe sezonale", "Orar i zgjatur"],
    tags: ["24/7", "Emergjencë", "B2B"],
    href: "/sherbimet/oncall",
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "pastrim",
    number: "01",
    title: "Pastrim Profesional",
    subtitle:
      "Pastrim ditor, industrial dhe pas ndërtimit për çdo lloj objekti — me pajisje të avancuara, staf të trajnuar dhe protokolle SLA.",
    description:
      "Ne përcaktojmë standarde të qarta për çdo ambient: nga zyrat dhe qendrat tregtare deri te objektet industriale dhe hapësirat pas ndërtimit. Ekipet tona punojnë sipas orarëve që ju përshtaten juve, me raportim të dokumentuar dhe kontroll cilësie në çdo fazë.",
    checklist: [
      "Pastrim ditor dhe thellë sipas standardeve ISO",
      "Pastrim industrial me pajisje të avancuara",
      "Pastrim pas ndërtimit dhe renovimit",
      "Raportim dixhital për çdo shërbim të kryer",
      "Protokolle SLA të matshme dhe të garantuara",
      "Produkte të sigurta për mjedisin dhe njerëzit",
    ],
    image:
      "https://images.pexels.com/photos/7078712/pexels-photo-7078712.jpeg?auto=compress&cs=tinysrgb&w=900",
    process: [
      {
        title: "Planifikimi",
        desc: "Hartojmë një plan të detajuar në bashkëpunim me klientin, sipas orarit të objektit.",
      },
      {
        title: "Mobilizimi",
        desc: "Ekipi arrin në lokal me të gjitha pajisjet dhe materialet e nevojshme.",
      },
      {
        title: "Ekzekutimi",
        desc: "Realizohet pastrim sipas protokollit të dakordësuar me supervizim të vazhdueshëm.",
      },
      {
        title: "Raportimi",
        desc: "Klienti merr një raport dixhital të plotë për çdo detyrë të kryer.",
      },
    ],
    cta: {
      headline: "Gati për një ambient më të pastër?",
      text: "Kërkoni ofertë për pastrim profesional — vlerësim fillestar pa angazhim.",
    },
  },
  {
    slug: "facility",
    number: "02",
    title: "Menaxhimi i Objekteve",
    subtitle:
      "Menaxhim i plotë i objektit — mirëmbajtje teknike, furnizim materialesh, supervizim dhe raportim transparent në kohë reale.",
    description:
      "Marrëdhënia jonë me ju është e strukturuar: një pikë kontakti, plane mujore, raporte të lexueshme për menaxherët dhe transparencë të plotë për furnizimet dhe ndërhyrjet teknike. Kjo është menaxhim objektesh për organizata që nuk duan surpriza operacionale.",
    checklist: [
      "Mirëmbajtje teknike e sistemeve të objektit",
      "Furnizim i rregullt me materiale dhe consumables",
      "Supervizim me raportim dixhital të vazhdueshëm",
      "Menaxhim i plotë i stafit dhe turneve",
      "Auditë cilësie periodike",
      "Kontakt i dedikuar me menaxherin e llogarisë",
    ],
    image:
      "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=900",
    process: [
      {
        title: "Auditimi fillestar",
        desc: "Vlerësojmë të gjitha nevojat e objektit dhe hartojmë një plan menaxhimi gjithëpërfshirës.",
      },
      {
        title: "Aktivizimi",
        desc: "Caktojmë stafin, materialet dhe sistemet e raportimit. Fillojmë operacionin në datën e dakordësuar.",
      },
      {
        title: "Menaxhimi ditor",
        desc: "Supervizim i vazhdueshëm, komunikim i hapur me klientin dhe raportim dixhital për çdo aktivitet.",
      },
      {
        title: "Rishikimi mujor",
        desc: "Takim mujor me klientin për të rishikuar performancën dhe për të bërë përshtatjet e nevojshme.",
      },
    ],
    cta: {
      headline: "Kërkoni një partner të besueshëm për objektin tuaj?",
      text: "Na kontaktoni për menaxhim objektesh — analizë fillestare dhe ofertë e strukturuar.",
    },
  },
  {
    slug: "dezinfektim",
    number: "03",
    title: "Dezinfektim & Sanitizim",
    subtitle:
      "Protokolle të rrepta dezinfektimi për objekte të shëndetit, ushqimit dhe çdo ambienti ku higjena është prioritet absolute.",
    description:
      "Përdorim produkte të certifikuara dhe procedura që përputhen me kërkesat e sektorit shëndetësor dhe ushqimor. Çdo intervenim dokumentohet — nga zgjedhja e agjentëve deri te verifikimi final — që ju të keni gjurmueshmëri të plotë për auditime dhe inspektime.",
    checklist: [
      "Dezinfektim me produkte të certifikuara EU",
      "Sanitizim për objekte shëndetësore dhe ushqimore",
      "Kontrolli i dëmtuesve dhe parandalimi",
      "Dezinfektim i sipërfaqeve me UV dhe kimikate",
      "Certifikim i procesit sipas normave ndërkombëtare",
      "Raportim të plotë me dokumentacion të procesit",
    ],
    image:
      "https://images.pexels.com/photos/4035588/pexels-photo-4035588.jpeg?auto=compress&cs=tinysrgb&w=900",
    process: [
      {
        title: "Vlerësimi i rrezikut",
        desc: "Identifikojmë zonat me rrezik më të lartë dhe hartohet një plan dezinfektimi i personalizuar.",
      },
      {
        title: "Zgjedhja e produkteve",
        desc: "Përdorim produkte të certifikuara që janë efikase ndaj baktereve dhe sigurta për njerëzit.",
      },
      {
        title: "Aplikimi profesional",
        desc: "Ekipi specializohet në aplikimin e produkteve nëpërmjet teknikave të ndryshme — spraj, UV, aerosolizim.",
      },
      {
        title: "Certifikimi",
        desc: "Pas përfundimit të procesit, lëshojmë një certifikatë dezinfektimi të njohur nga autoritetet kompetente.",
      },
    ],
    cta: {
      headline: "Nevojitet dezinfektim urgjent ose i planifikuar?",
      text: "Kërkoni vlerësim për dezinfektim — përgjigje e shpejtë dhe plan i qartë.",
    },
  },
  {
    slug: "oncall",
    number: "04",
    title: "Gatishmëri & Emergjencë",
    subtitle:
      "Gatishmëri e plotë 24/7 për çdo situatë të papritur — intervenime të shpejta, shërbime sezonale dhe ndihmë kurdo që kërkohet.",
    description:
      "Kur diçka nuk pret orarin e punës, ne jemi në linjë. Linja jonë operacionale koordinon mobilizimin e ekipit, komunikimin me ju dhe raportin pas intervenimit — që ju të dini saktësisht çfarë u bë dhe kur.",
    checklist: [
      "Intervenime emergjente brenda 2 orësh nga thirrja",
      "Ekip i gatshëm 24 orë, 7 ditë në javë",
      "Shërbime sezonale — verë, dimër, festa",
      "Pastrim i shpejtë pas ngjarjeve dhe aksidenteve",
      "Pa kontratë afatgjate — sipas nevojës dhe kërkesës",
      "Komunikim i drejtpërdrejtë me ekipin operacional",
    ],
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=900",
    process: [
      {
        title: "Thirrja",
        desc: "Telefononi numrin tonë 24/7. Ekipi i gatshëm konfirmon intervenimin në pak minuta.",
      },
      {
        title: "Mobilizimi",
        desc: "Ekipi niset drejt objektit tuaj me të gjitha pajisjet e nevojshme për situatën specifike.",
      },
      {
        title: "Intervenimi",
        desc: "Situata menaxhohet shpejt dhe profesionalisht. Lajmërojmë klientin për progresin.",
      },
      {
        title: "Raportimi",
        desc: "Pas përfundimit, dërgojmë një raport të plotë të shërbimit të kryer.",
      },
    ],
    cta: {
      headline: "Kërkoni një ekip emergjence të besueshëm?",
      text: "Na kontaktoni për ndihmë emergjence — linjë e dedikuar 24/7.",
    },
  },
];

export function getServiceDetail(slug: string) {
  return serviceDetails.find((s) => s.slug === slug);
}
