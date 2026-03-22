/** Referenca të emërtuara — listë besimi, jo studi rasti të fabrikuar. */

export interface ClientReference {
  name: string;
  category: string;
  /** Vijë opsionale konteksti, pa pretenduar detaje konfidenciale */
  line?: string;
}

export const clientReferences: ClientReference[] = [
  {
    name: "RBKO",
    category: "Bankë qendrore",
    line: "Mjedise me kërkesa të larta sigurie dhe dokumentimi.",
  },
  {
    name: "EULEX Kosovo",
    category: "Organizatë ndërkombëtare",
    line: "Operacione me protokolle aksesi dhe raportimi të strukturuara.",
  },
  {
    name: "Zyra e BE-së në Kosovë",
    category: "Organizatë ndërkombëtare",
    line: "Mbështetje operacionale për ambiente zyrash dhe të përbashkëta.",
  },
  {
    name: "UNMIK",
    category: "Organizatë ndërkombëtare",
    line: "Përputhje me kërkesat e misioneve ndërkombëtare në objekt.",
  },
  {
    name: "Kuvendi i Kosovës",
    category: "Institucion publik",
    line: "Objekt institucional me orar dhe protokolle të rrepta aksesi.",
  },
  {
    name: "PCB",
    category: "Sektor privat / bankar",
    line: "Shërbime në kontekst financiar dhe operacional B2B.",
  },
  {
    name: "IS Bank",
    category: "Bankë",
    line: "Degë dhe ambiente me diskrecion dhe standard të unifikuar.",
  },
  {
    name: "ZIRAAT Bank",
    category: "Bankë",
    line: "Mbulim operacional në linjë me pritshmëritë e sektorit bankar.",
  },
  {
    name: "OSCE",
    category: "Organizatë ndërkombëtare",
    line: "Kërkesa për profesionalizëm dhe komunikim të qartë në terren.",
  },
];

/** Pse na zgjedhin — për faqen e referencave */
export const partnerValueProps: { title: string; desc: string }[] = [
  {
    title: "Një partner, shumë lokacione",
    desc: "Koordinim i njëjtë operacional për degë dhe objekte të shpërndara — një menaxher llogarie, një standard.",
  },
  {
    title: "Dokumentim i lexueshëm për menaxhmentin",
    desc: "SLA dhe raporte mujore të strukturuara për vendimmarrje, jo vetëm për arkivë.",
  },
  {
    title: "Çertifikime ISO të integruara në punën ditore",
    desc: "Proceset tona përputhen me kërkesat ISO 9001, 14001 dhe 45001 — jo vetëm në letër.",
  },
];
