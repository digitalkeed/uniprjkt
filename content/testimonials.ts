export interface Testimonial {
  text: string;
  name: string;
  role: string;
  /** Shembull: Bankë / Qendër tregtare / Institucion publik */
  sector?: string;
  /** Shembull: Rrjet degësh, kampusi kryesor, kompleks administrativ */
  facility?: string;
  /** Shembull: Pastrim + menaxhim objekti, SLA mujore */
  serviceLine?: string;
}

export const testimonials: Testimonial[] = [
  {
    text: "UNI PROJECT na shërben me pastrim dhe menaxhim objekti në të gjitha degët. Profesionalë, të rregullt dhe me raportim të qartë — saktësisht çfarë na duhet për të mbajtur standardin e brendshëm.",
    name: "Menaxher Operacionesh",
    role: "Organizatë financiare",
    sector: "Banka & Financa",
    facility: "Rrjet degësh në të gjithë vendin",
    serviceLine: "Pastrim & menaxhim objekti me SLA të matshme",
  },
  {
    text: "Përvoja e gjatë dhe standardet ISO na dhanë besim nga tenderi deri te dita e përditshme. Ekipi vjen në kohë, puna është e qëndrueshme dhe komunikimi është i drejtpërdrejtë me pikën tonë të kontaktit.",
    name: "Drejtor Objekti",
    role: "Operacione & mirëmbajtje",
    sector: "Qendra Tregtare",
    facility: "Kompleks me trafik të lartë — Prishtinë",
    serviceLine: "Pastrim intensiv & mbështetje emergjence",
  },
  {
    text: "Nga auditimi fillestar deri te raportet mujore, gjithçka është e dokumentuar dhe e lexueshme për udhëheqjen. Kjo na ndihmon në kontrollin e brendshëm dhe në komunikimin me palët e jashtme.",
    name: "Përgjegjës Prokurimi & Shërbimesh",
    role: "Sektor publik",
    sector: "Institucione Publike",
    facility: "Objekt administrativ me kërkesa tenderë",
    serviceLine: "Plan operativ & raportim i auditueshëm",
  },
];
