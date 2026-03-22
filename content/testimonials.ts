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
    text: "UNI PROJECT na mbulon me pastrim dhe menaxhim objekti në degë të shumta. Profesionalë, të rregullt dhe me dokumentim të qartë — saktësisht çfarë na duhet për të ruajtur standardin e brendshëm.",
    name: "Menaxher Operacionesh",
    role: "Organizatë financiare",
    sector: "Banka & Financa",
    facility: "Rrjet degësh në të gjithë vendin",
    serviceLine: "Pastrim dhe menaxhim objekti me SLA të matshme",
  },
  {
    text: "Përvoja e gjatë dhe standardet ISO na dhanë besim nga oferta deri te dita e përditshme. Ekipi vjen në kohë, puna është e qëndrueshme dhe komunikimi është i drejtpërdrejtë me pikën tonë të kontaktit.",
    name: "Drejtor Objekti",
    role: "Operacione & mirëmbajtje",
    sector: "Qendra Tregtare",
    facility: "Kompleks me trafik të lartë — Prishtinë",
    serviceLine: "Pastrim intensiv dhe mbështetje emergjence",
  },
  {
    text: "Nga vlerësimi fillestar deri te përmbledhjet mujore, gjithçka mbetet e dokumentuar dhe e lexueshme për udhëheqjen. Kjo na ndihmon në kontrollin e brendshëm dhe në komunikimin me palët e jashtme.",
    name: "Përgjegjës Prokurimi & Shërbimesh",
    role: "Sektor publik",
    sector: "Institucione Publike",
    facility: "Objekt administrativ me kërkesa tenderë",
    serviceLine: "Plan operativ dhe dokumentim i auditueshëm",
  },
];
