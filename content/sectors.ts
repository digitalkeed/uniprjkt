export interface Sector {
  name: string;
  description: string;
  icon: string;
}

export const sectors: Sector[] = [
  {
    name: "Banka & Financa",
    description: "Rrjete bankare në të gjithë Kosovën.",
    icon: "briefcase",
  },
  {
    name: "Qendra Tregtare",
    description: "Mirëmbajtje 24/7 e ambienteve me trafik të lartë.",
    icon: "home",
  },
  {
    name: "Institucione Publike",
    description: "Konforme me standardet rregullatore publike.",
    icon: "users",
  },
  {
    name: "Zyra Korporative",
    description: "Menaxhimi i objekteve i integruar për zyrat e mëdha.",
    icon: "monitor",
  },
  {
    name: "Industri & Prodhim",
    description: "Pastrim industrial i ambienteve prodhuese.",
    icon: "activity",
  },
  {
    name: "Kujdesi Shëndëtesör",
    description: "Pastrim klinik sipas normave shëndëtesore.",
    icon: "heart",
  },
  {
    name: "Hoteleri",
    description: "Standarde premium higjienik.",
    icon: "star",
  },
  {
    name: "Post-konstruksion",
    description: "Pastrimi final pas ndërtimit.",
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
      "Pastrim i rrjeteve bankare kërkon konfidencialitet, saktësi dhe protokolle të rrepta sigurie. UNI PROJECT operon me diskrecion të plotë në ambientet financiare.",
    checklist: [
      "Pastrim i degëve bankare me akses të kontrolluar",
      "Protokolle konfidencialiteti për stafin",
      "Raportim i detajuar për çdo lokacion",
      "Mirëmbajtje e rrjeteve me dekë të shumta",
    ],
    image:
      "https://images.pexels.com/photos/534229/pexels-photo-534229.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    number: "02",
    name: "Qendra Tregtare",
    description:
      "Qendrat tregtare kërkojnë pastrim të vazhdueshëm gjatë gjithë orarit të punës. Ofrojmë staf të kualifikuar me turne të koordinuara për të ruajtur standardet higjinikë në çdo moment.",
    checklist: [
      "Pastrim gjatë orarit operacional",
      "Menaxhim i ambienteve të përbashkëta dhe banjove",
      "Pastrim i dyshemeve, xhamave dhe fasadave",
      "Furnizim me materiale higjienike",
    ],
    image:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

export const sectorCards = [
  {
    number: "03",
    name: "Institucione Publike",
    description:
      "Ministri, komuna, shërbime publike — UNI PROJECT plotëson të gjitha kërkesat rregullatore dhe procedurale të sektorit publik, duke garantuar transparencë të plotë.",
    checklist: [
      "Procedura të hapura të tenderimit",
      "Raportim i plotë dhe i auditueshëm",
      "Konforme me ligjet e prokurimit publik",
    ],
    icon: "users",
  },
  {
    number: "04",
    name: "Zyra Korporative",
    description:
      "Zyrat e mëdha kërkojnë menaxhim të vazhdueshëm të ambientit. Ofrojmë përfshirje të plotë — pastrim, mirëmbajtje teknike dhe furnizim materialesh.",
    checklist: [
      "Pastrim i zyrave, sallave dhe hapësirave të përbashkëta",
      "Mirëmbajtje e sistemeve teknike",
      "Menaxhim i stafit — turne dhe planëzim",
    ],
    icon: "monitor",
  },
];

export const smallSectors = [
  {
    name: "Industri & Prodhim",
    description: "Pastrim industrial me pajisje të avancuara për ambientë prodhuese.",
    icon: "activity",
  },
  {
    name: "Kujdesi Shëndëtesör",
    description: "Pastrim klinik dhe dezinfektim sipas normave shëndëtesore ndërkombëtare.",
    icon: "heart",
  },
  {
    name: "Hoteleri",
    description: "Standarde premium higjienike për hotelë, restorante dhe objekte akomodimi.",
    icon: "star",
  },
  {
    name: "Post-konstruksion",
    description: "Pastrimi final pas ndërtimit ose renovimit për dorëzim të objektivit.",
    icon: "construction",
  },
];
