/**
 * Homepage-only structured copy (long-form landing).
 * Service depth is sourced from serviceDetails in ./services where noted.
 */

import { serviceDetails, serviceSummaries } from "./services";

export const homeHero = {
  badge: "Lider operacional në Kosovë · që nga 2001",
  titleLines: ["Operacione të pastra.", "Objekte në", "standarde të qarta."],
  titleEmphasis: 2, // index of line with <em> — "standarde të qarta"
  lead:
    "UNI PROJECT është partner B2B për pastrim profesional, mirëmbajtje teknike dhe menaxhim objektesh në të gjithë Kosovën — me strukturë kontrate, supervizim dhe raportim të dokumentuar.",
  proofLine:
    "Çertifikuar ISO · Mbulim kombëtar · Linjë operative 24/7 për situata kritike",
};

export const homeAbout = {
  eyebrow: "Rreth kompanisë",
  title: "Partner operacional për objekte që nuk tolerojnë kaos",
  paragraphs: [
    "UNI PROJECT Sh.P.K. operon që nga viti 2001 si ofrues i shërbimeve të pastrimit profesional, mirëmbajtjes teknike dhe menaxhimit të objekteve për organizata që kërkojnë përsëritshmëri, transparencë dhe përputhje me standarde ndërkombëtare.",
    "Punojmë me banka, qendra tregtare, institucione publike, zyra korporative dhe ambiente me kërkesa të larta higjienike — nga Prishtina deri në degë në të gjithë vendin. Çdo kontratë strukturohet me pika të qarta kontakti, plane operacionale dhe raporte të lexueshme për menaxhimin ekzekutiv.",
    "Nuk ofrojmë ‘pastrues të dërguar në lokacion’. Ofrojmë model operacional: ekip të trajnuar, protokolle SLA, supervizim të vazhdueshëm dhe dokumentim që mbështet auditime, tenderë dhe kontroll brenda organizatës suaj.",
  ],
  imageAlt: "Koordinim operacional dhe komunikim profesional në objekt",
  imageSrc:
    "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

export const homeProofMetrics = [
  { value: "24+", label: "vite përvoje në treg" },
  { value: "270+", label: "profesionistë të trajnuar" },
  { value: "3", label: "çertifikime ISO (9001, 14001, 45001)" },
  { value: "24/7", label: "gatishmëri operative & linjë emergjence" },
];

export const homeWhy = {
  eyebrow: "Pse UNI PROJECT",
  title: "Arsyet që organizatat e mëdha na zgjedhin si partner",
  subtitle:
    "Kombinim i standardit, dokumentimit dhe pranisë operative — jo vetëm ‘pastrim i mirë’.",
  points: [
    {
      title: "Standarde ISO të integruara",
      text: "Sistemet tona të menaxhimit të cilësisë, mjedisit dhe SHSK përcaktojnë sjelljen ditore në objekt — jo vetëm në auditim.",
    },
    {
      title: "Supervizim i vazhdueshëm",
      text: "Strukturë e qartë përgjegjësish në terren dhe në zyrë; kontroll i ritmit të punës dhe i përputhjes me planin.",
    },
    {
      title: "Raportim & gjurmueshmëri",
      text: "Dokumentim që mbështet vendimmarrjen: çfarë u krye, kur dhe me çfarë rezultati — i lexueshëm për menaxherët e objektit.",
    },
    {
      title: "Ekip i trajnuar dhe i certifikuar",
      text: "Protokolle të përsëritshme, jo punë ad-hoc; përgatitje për ambiente me rregulla strikte sigurie dhe higjiene.",
    },
    {
      title: "Gatishmëri operative reale",
      text: "Linjë e dedikuar për situata kritike dhe koordinim i shpejtë kur objekti nuk mund të presë ‘nesër’.",
    },
    {
      title: "Mbulim në gjithë Kosovën",
      text: "I njëjti standard operacional në degë të shumta — i përkthyer në plane lokale dhe raporte të unifikuara.",
    },
    {
      title: "Qartësi kontrate & SLA",
      text: "Fushëveprim, përgjegjësi dhe matje të parashikuara — pa kosto të fshehura apo interpretime të lira.",
    },
  ],
};

/** Eight sectors — contextual copy for homepage (not only labels). */
export const homeSectors = [
  {
    name: "Banka & Financa",
    icon: "briefcase" as const,
    context:
      "Ambiente me kontroll aksesi, dokumentacion konfidencial dhe pritshmëri për diskrecion. Operojmë me protokolle sigurie dhe ritme që përputhen me orarin e degëve dhe të dhënave kritike.",
  },
  {
    name: "Qendra Tregtare",
    icon: "home" as const,
    context:
      "Trafik i lartë, zona të përbashkëta dhe banjo publike kërkojnë rotacion të vazhdueshëm dhe përgjigje ndaj incidenteve në kohë reale — pa ndërprerje të përvojës së blerësit.",
  },
  {
    name: "Institucione Publike",
    icon: "users" as const,
    context:
      "Kërkesa për transparencë, procedura të hapura dhe raporte të auditueshme. Strukturë dokumentimi që përputhet me pritshmëritë e prokurimit dhe kontrollit të brendshëm.",
  },
  {
    name: "Zyra Korporative",
    icon: "monitor" as const,
    context:
      "Qëndrime, salla takimesh dhe hapësira të përbashkëta — një standard i vetëm vizual dhe higjienik në të gjitha katet, me menaxhim materialesh dhe ndërhyrje teknike të koordinuara.",
  },
  {
    name: "Industri & Prodhim",
    icon: "activity" as const,
    context:
      "Ambiente prodhuese me zhavorr, lagështi dhe rrezik ndërprerjesh. Pastrim industrial dhe protokolle që përputhen me orarin e linjës dhe kërkesat e sigurisë në terren.",
  },
  {
    name: "Kujdesi Shëndetësor",
    icon: "heart" as const,
    context:
      "Zonat klinike dhe mbështetëse kërkojnë dezinfektim, sanitizim dhe gjurmë dokumenti për protokolle shëndetësore — jo vetëm pamje të pastër.",
  },
  {
    name: "Hoteleri",
    icon: "star" as const,
    context:
      "Përvoja e mysafirit varet nga detajet: hapësira publike, dhoma, kuzhinë dhe zonat e fshehura. Standard i qëndrueshëm që mbështet brendin dhe inspektimet.",
  },
  {
    name: "Post-konstruksion",
    icon: "construction" as const,
    context:
      "Pastrimi final pas ndërtimit ose renovimit për dorëzim të kontrolluar të objektit — në koordinim me ekipet e tjera dhe afate të qarta të dorëzimit.",
  },
];

export const homeProcess = {
  eyebrow: "Modeli operacional",
  title: "Nga vlerësimi te përmirësimi i vazhdueshëm",
  subtitle:
    "Një rrjedhë e dokumentuar — jo tre hapa marketingu, por proces që mbështet tenderë, SLA dhe auditime të brendshme.",
  steps: [
    {
      num: "01",
      title: "Auditim & vlerësim objekti",
      desc: "Analizojmë hapësirat, rreziqet operacionale, orarin dhe pikat kritike — për një bazë të përbashkët për ofertë.",
    },
    {
      num: "02",
      title: "Ofertë & plan operativ",
      desc: "Përcaktojmë fushëveprim, frekuenca, përgjegjësi dhe matje (SLA). Ju merrni një dokument të lexueshëm, jo vlerësim të paqartë.",
    },
    {
      num: "03",
      title: "Implementim shërbimi",
      desc: "Mobilizim i ekipit, materialeve dhe kanaleve të raportimit. Fillimi i koordinuar për të shmangur boshllëqe në ditët e para.",
    },
    {
      num: "04",
      title: "Supervizim & kontroll cilësie",
      desc: "Mbikëqyrje në terren, kontroll i përputhjes me planin dhe përgjigje ndaj shmangieve — para se të bëhen krizë.",
    },
    {
      num: "05",
      title: "Raportim & optimizim",
      desc: "Raporte periodike, takime rishikimi dhe përshtatje të planit sipas volumit, sezonit ose ndryshimeve në objekt.",
    },
  ],
};

export const homeStandards = {
  eyebrow: "Standarde & përputhje",
  title: "Operacion i matshëm — jo premtime të paverifikuara",
  intro:
    "Cilësia për ne është proces: përcaktim i qartë i kritereve, verifikim në terren dhe dokumentim për menaxhimin tuaj të rrezikut dhe reputacionit.",
  columns: [
    {
      title: "ISO & governance",
      items: [
        "ISO 9001 — fokus në procese të përsëritshme dhe përmirësim",
        "ISO 14001 — menaxhim mjedisor në përzgjedhje materialesh dhe trajtim mbeturinash",
        "ISO 45001 — SHSK në terren, pajisje dhe trajnime",
      ],
    },
    {
      title: "Cilësi & siguri në objekt",
      items: [
        "Kontrolle të planifikuara dhe inspektime të paparashikuara sipas nevojës",
        "Protokolle higjienike për sektorë me rrezik të lartë",
        "Koordinim me sigurinë e objektit dhe procedurat e aksesit",
      ],
    },
    {
      title: "Raportim & përgjegjësi",
      items: [
        "Dokumentim për auditime të brendshme dhe kërkesa rregullatore",
        "Transparencë në furnizime dhe ndërhyrje",
        "Rrjedhë e qartë eskalimi kur diçka del nga plani",
      ],
    },
  ],
};

export const homeServicesIntro = {
  eyebrow: "Arkitektura e shërbimeve",
  title: "Katër shtylla operacionale — një model raportimi",
  subtitle:
    "Secila shtyllë ka fushëveprim, protokolle dhe ekip — të integruara në një strukturë të vetme menaxhimi llogarie.",
};

/** Full service blocks for homepage — derived from canonical serviceDetails */
export const homeServiceBlocks = serviceDetails.map((d) => {
  const tags = serviceSummaries.find((s) => s.slug === d.slug)?.tags ?? [];
  return {
    slug: d.slug,
    number: d.number,
    title: d.title,
    positioning: d.subtitle,
    body: d.description,
    capabilities: d.checklist,
    href: `/sherbimet/${d.slug}`,
    image: d.image,
    tags,
    icon:
      d.slug === "pastrim"
        ? ("building" as const)
        : d.slug === "facility"
          ? ("monitor" as const)
          : d.slug === "dezinfektim"
            ? ("activity" as const)
            : ("clock" as const),
  };
});

export const homeTestimonialsIntro = {
  eyebrow: "Referenca & besim",
  title: "Çfarë thonë përgjegjësit operacionalë",
  subtitle:
    "Identitetet e organizatave janë të përgjenerizuara për konfidencialitet; konteksti i objektit dhe shërbimit është real.",
};

export const homeFinalCta = {
  headline: "Kërkoni vlerësim ose ofertë — pa angazhim fillestar",
  text:
    "Na shkruani për objektin tuaj (lloji, lokacioni, volumi i përgjithshëm). Ekipi ynë operacional kthen përgjigje të parë brenda 24 orëve në ditë pune — me hapat e ardhshëm dhe, kur është e nevojshme, një takim në vend.",
  bullets: [
    "Përshkrim i qartë i fushëveprimit dhe përgjegjësive",
    "Kohë përgjigjeje e parashikuar — pa pritje pa fund",
    "Ekip që punon me objekte të ngjashme në sektorin tuaj",
    "Pa detyrim derisa të pranoni një ofertë të shkruar",
  ],
  note: "Përgjigje e parë brenda 24 orëve · Objekte të të gjitha madhësive në Kosovë",
};
