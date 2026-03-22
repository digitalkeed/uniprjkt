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
      "Pastrim ditor, industrial, pas ndërtimit dhe në nivele të larta — me pajisje profesionale, protokolle SLA dhe dokumentim të lexueshëm.",
    icon: "building",
    checklist: [
      "Pastrim ditor dhe thellë",
      "Xham, fasadë dhe nivele të larta",
      "Pajisje dhe protokolle SLA",
      "Dokumentim dhe transparencë",
    ],
    tags: ["B2B", "SLA", "Higjienë"],
    href: "/sherbimet/pastrim",
  },
  {
    slug: "facility",
    title: "Menaxhimi i Objekteve",
    description:
      "Mirëmbajtje teknike, furnizim, supervizim dhe menaxhim stafi në lokacion — me inspektime, raportim dhe gjurmueshmëri.",
    icon: "monitor",
    checklist: [
      "Mirëmbajtje teknike",
      "Materiale dhe consumables",
      "Staf në lokacionin e klientit",
      "Inspektime dhe raportim",
    ],
    tags: ["B2B", "24/7", "SLA"],
    href: "/sherbimet/facility",
  },
  {
    slug: "dezinfektim",
    title: "Dezinfektim & Sanitizim",
    description:
      "Protokolle të rrepta për objekte shëndetësore, ushqimore dhe ambiente me kërkesa të larta higjienike — me dokumentacion të plotë.",
    icon: "activity",
    checklist: [
      "Produkte të certifikuara",
      "Protokolle sipas sektorit",
      "Ekip i specializuar",
      "Dokumentacion për auditim",
    ],
    tags: ["Certifikim", "SLA", "B2B"],
    href: "/sherbimet/dezinfektim",
  },
  {
    slug: "oncall",
    title: "Gatishmëri / Emergjencë",
    description:
      "Gatishmëri 24/7 për intervenime urgjente, shërbime sezonale dhe mbështetje pas ngjarjeve — me linjë të dedikuar operacionale.",
    icon: "clock",
    checklist: [
      "Gatishmëri 24/7",
      "Sezonale verë / dimër",
      "Pas ngjarjeve dhe festave",
      "Koordinim i shpejtë",
    ],
    tags: ["24/7", "Emergjencë", "B2B"],
    href: "/sherbimet/oncall",
  },
  {
    slug: "specializuar",
    title: "Shërbime të Specializuara",
    description:
      "Pastrim xhamash, fasadash dhe nivelesh të larta (deri në ~17 m), panele solare, tapete dhe upholstery — plus trajnime profesionale për staf pastrimi.",
    icon: "layers",
    checklist: [
      "Xham, fasadë, lift deri në 17 m",
      "Pastrim panelesh solare",
      "Tapete dhe upholstery",
      "Trajnim për personel pastrimi",
    ],
    tags: ["Special", "Trajnim", "B2B"],
    href: "/sherbimet/specializuar",
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "pastrim",
    number: "01",
    title: "Pastrim Profesional",
    subtitle:
      "Pastrim ditor, industrial dhe pas ndërtimit — përfshirë xham, fasadë dhe nivele të larta — me staf të trajnuar dhe matje të qarta cilësie.",
    description:
      "Përcaktojmë standarde për çdo ambient: zyra, qendra tregtare, industri dhe hapësira pas ndërtimit. Ekipet punojnë sipas orarëve tuaja, me listë inspeksionesh, supervizim dhe dokumentim që mbështet auditimet dhe menaxhimin e objektit.",
    checklist: [
      "Pastrim ditor dhe thellë sipas kritereve të dakordësuara",
      "Pastrim xhamash, fasadash dhe hapësirash në nivele të larta",
      "Pastrim panelesh solare dhe sipërfaqeve të ekspozuara",
      "Menaxhim materialesh higjienike dhe consumables sipas objektit",
      "Pastrim industrial me pajisje të përshtatura",
      "Pastrim pas ndërtimit dhe renovimit për dorëzim të kontrolluar",
      "Protokolle SLA të matshme; raporte dhe transparencë në furnizime",
      "Produkte të përzgjedhura për mjedisin dhe kategorinë e objektit",
    ],
    image:
      "https://images.pexels.com/photos/7078712/pexels-photo-7078712.jpeg?auto=compress&cs=tinysrgb&w=900",
    process: [
      {
        title: "Planifikimi",
        desc: "Plan në bashkëpunim me ju — orar, zona kritike dhe frekuenca — i përkthyer në checklist operacionale.",
      },
      {
        title: "Mobilizimi",
        desc: "Ekipi dhe pajisjet mbërrijnë sipas planit; koordinim me aksesin dhe sigurinë e objektit.",
      },
      {
        title: "Ekzekutimi",
        desc: "Punë sipas protokollit me supervizim në terren dhe korrigjim para se të bëhen devijime të qëndrueshme.",
      },
      {
        title: "Dokumentimi",
        desc: "Përmbledhje e kryerjeve dhe vërejtjeve — e lexueshme për menaxhimin, jo vetëm për arkivë.",
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
      "Menaxhim i plotë i objektit — mirëmbajtje teknike, furnizim, supervizim, inspektime dhe menaxhim stafi në lokacion.",
    description:
      "Një pikë kontakti, plane operative dhe raporte të strukturuara për menaxherët. Transparencë për furnizimet dhe ndërhyrjet teknike; stafi në vend sipas turneve dhe kërkesave tuaja — me monitorim cilësie dhe eskalim të qartë.",
    checklist: [
      "Mirëmbajtje teknike e sistemeve kryesore të objektit",
      "Furnizim i rregullt me materiale dhe consumables",
      "Menaxhim i stafit në lokacionin e klientit dhe turne sipas planit",
      "Inspektime, raportim dhe monitorim cilësie në ritëm të përshtatur",
      "Supervizim me dokumentim — jo vetëm prani në listë",
      "Auditë cilësie dhe rishikime me menaxhimin e objektit",
      "Menaxher llogarie i dedikuar për koordinim dhe SLA",
    ],
    image:
      "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=900",
    process: [
      {
        title: "Auditimi fillestar",
        desc: "Vlerësojmë nevojat e objektit dhe i përkthejmë në plan menaxhimi dhe matje.",
      },
      {
        title: "Aktivizimi",
        desc: "Stafi, materialet dhe kanalet e raportimit aktivizohen në datën e dakordësuar.",
      },
      {
        title: "Operacioni ditor",
        desc: "Supervizim, komunikim me ju dhe dokumentim i aktiviteteve dhe furnizimeve.",
      },
      {
        title: "Rishikimi",
        desc: "Takime periodike për performancë, përshtatje sezonale dhe përmirësim.",
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
      "Protokolle të forta për shëndetësi, ushqim dhe ambiente ku higjena është prioritet — me gjurmueshmëri nga zgjedhja e agjentëve deri te verifikimi.",
    description:
      "Produkte të përputhshme me kërkesat e sektorit; procedura të dokumentuara për inspektime dhe auditime. Fokus në sipërfaqe, zona me trafik dhe protokolle që përputhen me rregulloret e objektit.",
    checklist: [
      "Dezinfektim me produkte të dokumentuara dhe të përshtatshme për ambientin",
      "Sanitizim për objekte shëndetësore dhe ushqimore",
      "Kontroll dëmtuesish dhe parandalim sipas planit",
      "Teknika të ndryshme aplikimi kur është e nevojshme (sipas protokollit)",
      "Verifikim dhe dokumentacion për kërkesa rregullatore",
      "Raportim që mbështet auditimin — jo vetëm deklarata",
    ],
    image:
      "https://images.pexels.com/photos/4035588/pexels-photo-4035588.jpeg?auto=compress&cs=tinysrgb&w=900",
    process: [
      {
        title: "Vlerësimi",
        desc: "Zonat me rrezik më të lartë dhe plani i personalizuar i dezinfektimit.",
      },
      {
        title: "Zgjedhja",
        desc: "Agjentë dhe metoda të përshtatshme për njerëzit dhe sipërfaqet.",
      },
      {
        title: "Aplikimi",
        desc: "Ekip i trajnuar; respektim i kohës së veprimit dhe zonave të kufizuara.",
      },
      {
        title: "Dokumentimi",
        desc: "Përmbledhje e kryerjes për menaxhim dhe (kur aplikohet) certifikim procesi.",
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
      "Gatishmëri 24/7 kur objekti nuk pret — intervenime, sezonale, pas ngjarjesh dhe mbështetje pas festave.",
    description:
      "Linja operacionale koordinon mobilizimin, komunikimin me ju dhe përmbledhjen pas intervenimit — që të dini çfarë u bë, kur dhe nga kush.",
    checklist: [
      "Intervenime emergjente sipas marrëveshjes — koordinim i shpejtë",
      "Ekip i gatshëm 24 orë, 7 ditë në javë",
      "Shërbime sezonale verë / dimër të planifikuara me ju",
      "Mbështetje pas ngjarjeve, aksidenteve dhe periudhave me ngarkesë të lartë",
      "Pastrim dhe rikthim i shpejtë pas festave ose ngjarjeve të papritura",
      "Komunikim i drejtpërdrejtë me ekipin operacional",
    ],
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=900",
    process: [
      {
        title: "Thirrja",
        desc: "Konfirmim i shpejtë dhe përshkrim i qartë i nevojës.",
      },
      {
        title: "Mobilizimi",
        desc: "Ekipi dhe pajisjet sipas situatës — me informim për kohën e arritjes.",
      },
      {
        title: "Intervenimi",
        desc: "Ekzekutim sipas planit; përditësime gjatë punës kur është e nevojshme.",
      },
      {
        title: "Përmbledhja",
        desc: "Përmbledhje e punës së kryer për regjistrim dhe përmirësim.",
      },
    ],
    cta: {
      headline: "Kërkoni një ekip emergjence të besueshëm?",
      text: "Na kontaktoni për ndihmë emergjence — linjë e dedikuar 24/7.",
    },
  },
  {
    slug: "specializuar",
    number: "05",
    title: "Shërbime të Specializuara",
    subtitle:
      "Kapacitete për sipërfaqe të vështira: xham dhe fasadë deri në rreth 17 m, panele solare, tapete dhe upholstery — plus trajnime për stafin e pastrimit.",
    description:
      "Kur standardi ditor nuk mjafton, e mobilizojmë ekipin dhe pajisjet e specializuara — gjithmonë me vlerësim paraprak të aksesit, sigurisë dhe metodës. Akademia jonë e Trajnimit në Prishtinë ofron edhe module për personelin e pastrimit, të lidhura me praktikën në objekt.",
    checklist: [
      "Pastrim xhamash, fasadash dhe hapësirash në lartësi (lift deri në ~17 m)",
      "Pastrim profesional i paneleve solare",
      "Pastrim tapetesh dhe upholstery sipas fibrës dhe objektit",
      "Trajnim profesional për personelin e pastrimit — në akademi dhe në vendin e punës",
      "Metoda dhe agjentë të përshtatur për sipërfaqen — jo zgjidhje universale",
      "Koordinim me sigurinë e objektit dhe protokolle pune në lartësi",
    ],
    image:
      "https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=900",
    process: [
      {
        title: "Vlerësimi",
        desc: "Akses, lartësi, lloji i sipërfaqes dhe rreziku — para ofertës.",
      },
      {
        title: "Planifikimi metodës",
        desc: "Pajisje, agjentë dhe radhitje e punës për rezultat të sigurt.",
      },
      {
        title: "Ekzekutimi",
        desc: "Ekip i specializuar me PPE dhe kontroll në hap.",
      },
      {
        title: "Verifikimi",
        desc: "Kontroll vizual dhe (kur aplikohet) dokumentim për dorëzim.",
      },
    ],
    cta: {
      headline: "Projekte me kërkesa të veçanta?",
      text: "Kërkoni vlerësim për shërbime të specializuara ose trajnime për stafin — përgjigje e shpejtë nga operacionet.",
    },
  },
];

export function getServiceDetail(slug: string) {
  return serviceDetails.find((s) => s.slug === slug);
}
