export interface Sector {
  name: string;
  description: string;
  icon: string;
}

export const sectors: Sector[] = [
  {
    name: "Banka & Financa",
    description:
      "Degë, arkiva dhe ambiente me kontroll aksesi — operojmë me protokolle sigurie dhe ritme që përputhen me orarin e bankës dhe kërkesat e rregullatorit.",
    icon: "briefcase",
  },
  {
    name: "Qendra Tregtare",
    description:
      "Trafik i lartë dhe zona të përbashkëta kërkojnë rotacion të vazhdueshëm, reagim ndaj incidenteve dhe standard të qëndrueshëm gjatë gjithë javës.",
    icon: "home",
  },
  {
    name: "Institucione Publike",
    description:
      "Transparencë, dokumentacion i auditueshëm dhe përputhje me procedurat publike — nga objektet qendrore te degët nëpër vend.",
    icon: "users",
  },
  {
    name: "Organizata Ndërkombëtare",
    description:
      "Zyra misionesh dhe organizata me protokolle sigurie, konfidencialiteti dhe raportimi të strukturuar — në përputhje me kërkesat e palëve ndërkombëtare dhe të objektit pritës.",
    icon: "briefcase",
  },
  {
    name: "Zyra Korporative",
    description:
      "Një standard i vetëm në të gjitha katet: pastrim, mirëmbajtje teknike dhe menaxhim materialesh — me komunikim të qartë me menaxhimin e objektit.",
    icon: "monitor",
  },
  {
    name: "Industri & Prodhim",
    description:
      "Ambiente prodhuese me zhavorr, lagështi dhe zona kritike — pastrim industrial dhe protokolle që respektojnë orarin e linjës dhe sigurinë në terren.",
    icon: "activity",
  },
  {
    name: "Kujdesi Shëndetësor",
    description:
      "Spitale, klinika dhe laboratorë: dezinfektim, sanitizim dhe dokumentim që mbështet protokollet klinike dhe inspektimet.",
    icon: "heart",
  },
  {
    name: "Hoteleri",
    description:
      "Hapësira publike, dhoma dhe kuzhinë — standard i qëndrueshëm që mbështet brendin dhe përvojën e mysafirit.",
    icon: "star",
  },
  {
    name: "Post-konstruksion",
    description:
      "Pastrimi final pas ndërtimit ose renovimit për dorëzim të kontrolluar — në koordinim me afate dhe ekipet e tjera në objekt.",
    icon: "construction",
  },
];

export interface SectorDetail {
  number: string;
  name: string;
  description: string;
  checklist: string[];
  image?: string;
}

export const sectorDetails: SectorDetail[] = [
  {
    number: "01",
    name: "Banka & Institucionet Financiare",
    description:
      "Pastrimi dhe menaxhimi në rrjete bankare kërkon diskrecion, saktësi dhe protokolle të rrepta sigurie. UNI PROJECT operon me qasje të unifikuar për degë të shumta dhe raportim të strukturuar.",
    checklist: [
      "Pastrim dhe mirëmbajtje degësh me akses të kontrolluar",
      "Protokolle konfidencialiteti dhe trajnimi për stafin në objekt",
      "Raportim i detajuar për lokacionet — një standard, shumë pika",
      "Koordinim me sigurinë fizike dhe rregulloret e brendshme të bankës",
    ],
    image:
      "https://images.pexels.com/photos/534229/pexels-photo-534229.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    number: "02",
    name: "Qendra Tregtare",
    description:
      "Qendrat tregtare kërkojnë prani gjatë orarit operacional dhe përgjigje ndaj incidenteve pa ndërprerë përvojën e vizitorëve. Ofrojmë turne të koordinuara dhe eskalim të qartë.",
    checklist: [
      "Pastrim gjatë orarit dhe pas mbylljes sipas planit",
      "Menaxhim i ambienteve të përbashkëta, hyrjeve dhe banjove",
      "Pastrim dysheme, xhamash dhe sipërfaqesh të dukshme për vizitorët",
      "Furnizim me materiale higjienike dhe kontroll konsumimi",
    ],
    image:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    number: "03",
    name: "Spitale & Shëndetësi",
    description:
      "Ambiente klinike dhe mbështetëse kërkojnë protokolle strikte dezinfektimi, gjurmueshmëri dhe koordinim me stafin mjekësor — jo vetëm pamje të pastër.",
    checklist: [
      "Dezinfektim dhe sanitizim sipas zonës (klinike vs. publike)",
      "Menaxhim i mbeturinave dhe materialeve sipas kategorisë",
      "Dokumentacion për auditim dhe kërkesa rregullatore",
      "Trajnim i stafit tonë për sjellje në ambiente me rrezik biologjik",
    ],
    image:
      "https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    number: "04",
    name: "Shkolla & Arsim",
    description:
      "Shkollat dhe institucionet arsimore kombinojnë hapësira me trafik të lartë dhe nevojë për orar të përshtatur — pa ndërprerje të panevojshme të mësimit.",
    checklist: [
      "Plane pastrimi të përshtatura me orarin shkollor dhe pushimet",
      "Ambiente të përbashkëta, klasë dhe sport — me frekuenca të qarta",
      "Produkte të përshtatshme për hapësira me fëmijë dhe staf",
      "Komunikim me administratën për ngjarje dhe nevojë shtesë",
    ],
    image:
      "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    number: "05",
    name: "Industri & Prodhim",
    description:
      "Fabrika dhe linja prodhimi kanë zona me zhavorr, lagështi dhe kërkesa sigurie. Pastrimi ynë industrial përshtatet me orarin e prodhimit dhe ndalesat e planifikuara.",
    checklist: [
      "Pastrim industrial dhe zona magazinimi",
      "Koordinim me sigurinë e punës dhe akses në zona kritike",
      "Pajisje dhe metoda të përshtatura për llojin e sipërfaqes",
      "Raportim incidentesh dhe ndërhyrjeve për menaxhimin e objektit",
    ],
    image:
      "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    number: "06",
    name: "Organizata Ndërkombëtare",
    description:
      "Zyra dhe objekte me kërkesa të larta sigurie, konfidencialiteti dhe përputhjeje me procedura ndërkombëtare — me komunikim të strukturuar dhe dokumentim të qartë.",
    checklist: [
      "Protokolle aksesi dhe eskalimi me sigurinë e objektit",
      "Diskrecion dhe trajnim i stafit për ambiente të klasifikuara",
      "Raportim i lexueshëm për menaxhimin vendor dhe vendorët",
      "Fleksibilitet për orare dhe ngjarje të jashtëzakonshme",
    ],
    image:
      "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

export const sectorCards = [
  {
    number: "07",
    name: "Institucione Publike",
    description:
      "Ministri, komuna dhe shërbime publike — UNI PROJECT ofron transparencë, dokumentacion të auditueshëm dhe përputhje me kërkesat e prokurimit dhe kontrollit të brendshëm.",
    checklist: [
      "Procedura të dokumentuara dhe komunikim me njësitë përgjegjëse",
      "Raportim i plotë për tenderë, SLA dhe rishikime",
      "Strukturë eskalimi kur objekti kërkon ndryshim operacional",
    ],
    icon: "users",
  },
  {
    number: "08",
    name: "Zyra Korporative",
    description:
      "Kampus zyrash dhe hapësira hibride: një menaxher llogarie, plane mujore dhe raporte për menaxhimin ekzekutiv — pastrim, teknike dhe furnizime të integruara.",
    checklist: [
      "Pastrim i zyrave, sallave dhe hapësirave të përbashkëta",
      "Mirëmbajtje e sistemeve bazë dhe koordinim me IT/facility",
      "Menaxhim stafi dhe turnesh sipas orarit të objektit",
    ],
    icon: "monitor",
  },
];

export const smallSectors = [
  {
    name: "Industri & Prodhim",
    description:
      "Linje prodhimi dhe magazina me kërkesa të veçanta — pastrim industrial, koordinim me ndalesat e planifikuara dhe sigurinë në terren.",
    icon: "activity",
  },
  {
    name: "Kujdesi Shëndetësor",
    description:
      "Spitale dhe klinika: protokolle dezinfektimi, sanitizimi dhe dokumentimi që mbështet inspektimet dhe kërkesat klinike.",
    icon: "heart",
  },
  {
    name: "Hoteleri",
    description:
      "Hotel, restorante dhe akomodim: standard i qëndrueshëm në hapësira publike dhe private — me fleksibilitet për sezon dhe ngjarje.",
    icon: "star",
  },
  {
    name: "Post-konstruksion",
    description:
      "Pastrimi final pas ndërtimit ose renovimit për dorëzim të kontrolluar — në bashkëpunim me kontraktorët dhe afatin e pranimit.",
    icon: "construction",
  },
];
