export interface Project {
  sector: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export const projects: Project[] = [
  {
    sector: "Sektor Bankar",
    title: "Rrjet kombëtar bankar",
    description:
      "Menaxhim i objekteve për mbi 30 degë bankare në të gjithë Kosovën. Shërbimet përfshijnë pastrim ditor, mirëmbajtje teknike dhe furnizim të përditëshëm me materiale.",
    tags: ["Pastrim ditor", "Menaxhimi i objekteve", "30+ degë"],
    image:
      "https://images.pexels.com/photos/534229/pexels-photo-534229.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    sector: "Qendra Tregtare",
    title: "Qendra tregtare — Prishtinë",
    description:
      "Mirëmbajtje e plotë 24/7 e njës nga qendrat më të mëdha tregtare në Kosovë. Stafi ynë përbëhet nga 40 profesionistë të dedikuar me turne të koordinuara.",
    tags: ["24/7", "40 staf", "Pastrim gjatë orarit"],
    image:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    sector: "Institucione Publike",
    title: "Institucione qeveritare",
    description:
      "Kontratanë afatgjatë për pastrim dhe menaxhim të nësë ndërtesave më të mëdha institucionale. Të gjitha procedurat janë në përputhje me ligjin e prokurimit publik.",
    tags: ["Prokurimi publik", "SLA", "Transparencë"],
    image:
      "https://images.pexels.com/photos/2132182/pexels-photo-2132182.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];
