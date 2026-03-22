export interface Testimonial {
  text: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    text: "UNI PROJECT na shërben me pastrim dhe menaxhim objektesh në të gjitha degët. Profesionalë, të rregullt dhe me raportim të qartë — saktësisht çfarë na duhet.",
    name: "Menaxher Operacionesh",
    role: "Bankë — rrjet kombëtar",
  },
  {
    text: "Përvoja e gjatë dhe standardet ISO na dhanë besim. Ekipi vjen në kohë, puna është e pastër dhe komunikimi i shkëlqyer.",
    name: "Drejtor Objekti",
    role: "Qendër tregtare — Prishtinë",
  },
  {
    text: "Nga auditimi fillestar deri te raportimi dixhital, gjithçka është transparente. Rekomandoj për objekte të mëdha dhe me kërkesa të larta.",
    name: "Përgjegjës Blerje",
    role: "Institucion publik",
  },
];
