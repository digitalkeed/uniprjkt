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
      "Menaxhim i facility për mbi 30 degë bankare në të gjithë Kosovën. Shërbimet përfshijnë pastrim ditor, mirëmbajtje teknike dhe furnizim të përditëshëm me materiale.",
    tags: ["Pastrim ditor", "Facility Management", "30+ degë"],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
  },
  {
    sector: "Qendra Tregtare",
    title: "Qendra tregtare — Prishtinë",
    description:
      "Mirëmbajtje e plotë 24/7 e njës nga qendrat më të mëdha tregtare në Kosovë. Stafi ynë përbëhet nga 40 profesionistë të dedikuar me turne të koordinuara.",
    tags: ["24/7", "40 staf", "Pastrim gjatë orarit"],
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&auto=format&fit=crop&q=80",
  },
  {
    sector: "Institucione Publike",
    title: "Institucione qeveritare",
    description:
      "Kontratanë afatgjatë për pastrim dhe menaxhim të nësë ndërtesave më të mëdha institucionale. Të gjitha procedurat janë në përputhje me ligjin e prokurimit publik.",
    tags: ["Prokurimi publik", "SLA", "Transparencë"],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
  },
];
