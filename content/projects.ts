export interface Project {
  sector: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  /** Operacioni — pa emra klientësh (NDA) */
  scope: string;
  teamSize: string;
  services: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    sector: "Sektor Bankar",
    title: "Rrjet kombëtar bankar",
    description:
      "Menaxhim i objekteve për mbi 30 degë bankare në të gjithë Kosovën. Shërbimet përfshijnë pastrim ditor, mirëmbajtje teknike dhe furnizim të përditshëm me materiale.",
    tags: ["Pastrim ditor", "Menaxhimi i objekteve", "30+ degë"],
    image:
      "https://images.pexels.com/photos/534229/pexels-photo-534229.jpeg?auto=compress&cs=tinysrgb&w=900",
    scope: "30+ degë në të gjithë vendin; orar i koordinuar me protokolle sigurie",
    teamSize: "Ekip i dedikuar me supervizor rajonal",
    services: "Pastrim, furnizim, raportim mujor SLA",
    outcome: "Një kontratë e vetme operacionale — një pikë përgjegjësie për ju",
  },
  {
    sector: "Qendra Tregtare",
    title: "Qendra tregtare — Prishtinë",
    description:
      "Mirëmbajtje e plotë 24/7 e njërit prej qendrave më të mëdha tregtare në Kosovë. Stafi ynë përbëhet nga 40 profesionistë të dedikuar me turne të koordinuara.",
    tags: ["24/7", "40 staf", "Pastrim gjatë orarit"],
    image:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=900",
    scope: "Ambiente me trafik të lartë; zona të përbashkëta dhe hyrje",
    teamSize: "40 profesionistë në turne",
    services: "Pastrim, mirëmbajtje higjienike, përgjigje operacionale",
    outcome: "Ambient i qëndrueshëm gjatë gjithë javës — pa ndërprerje të shërbimit",
  },
  {
    sector: "Institucione Publike",
    title: "Institucione qeveritare",
    description:
      "Kontrata afatgjatë për pastrim dhe menaxhim i ndërtesave më të mëdha institucionale. Të gjitha procedurat janë në përputhje me ligjin e prokurimit publik.",
    tags: ["Prokurimi publik", "SLA", "Transparencë"],
    image:
      "https://images.pexels.com/photos/2132182/pexels-photo-2132182.jpeg?auto=compress&cs=tinysrgb&w=900",
    scope: "Objekte të mëdha institucionale; kërkesa rregullatore strikte",
    teamSize: "Ekip i certifikuar; raportim i auditueshëm",
    services: "Pastrim, menaxhim objekti, dokumentacion tenderësh",
    outcome: "Përputhje me prokurimin publik dhe transparencë në raportim",
  },
];

/** Pse na zgjedhin — për faqen e referencave (jo dëshmi të dyfishuara) */
export const partnerValueProps: { title: string; desc: string }[] = [
  {
    title: "Një partner, shumë lokacione",
    desc: "Koordinim i njëjtë operacional për degë dhe objekte të shpërndara — një menaxher llogarie, një standard.",
  },
  {
    title: "Raportim i lexueshëm për menaxhmentin",
    desc: "SLA dhe raporte mujore të strukturuara për vendimmarrje, jo vetëm për arkivë.",
  },
  {
    title: "Certifikime ISO të integruara në punën ditore",
    desc: "Proceset tona përputhen me kërkesat ISO 9001, 14001 dhe 45001 — jo vetëm në letër.",
  },
];
