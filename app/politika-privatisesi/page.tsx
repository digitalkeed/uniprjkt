import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Politika e Privatësisë dhe Cookies",
  description:
    "Politika e privatësisë dhe përdorimit të cookies për UNI PROJECT Sh.P.K. — si mbledhim, përdorim dhe mbrojmë të dhënat tuaja.",
};

export default function PolitikaPrivatisesiPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        breadcrumbs={[
          { label: "Ballina", href: "/" },
          { label: "Politika e Privatësisë" },
        ]}
        title="Politika e"
        titleEm="Privatësisë"
        subtitle="Transparencë për të dhënat tuaja. Lexoni si mbledhim, përdorim dhe mbrojmë informacionin në faqen tonë."
      />

      <section className="sec sec-subtle">
        <div className="wrap">
          <div className="legal-content">
            <h2 id="mbledhja" className="legal-h2">
              1. Kush jemi ne
            </h2>
            <p>
              UNI PROJECT Sh.P.K. (&quot;ne&quot;, &quot;kompania&quot;) është një kompani e regjistruar në Kosovë që ofron
              shërbime pastrimi profesional, menaxhimi i objekteve dhe mirëmbajtje teknike. Adresa jonë: Rr. Ukshin
              Hoti, Prishtinë, Kosovë. Email:{" "}
              <a href="mailto:info@uniproject-ks.com">info@uniproject-ks.com</a>. Kjo politikë shpjegon si trajtojmë
              të dhënat personale kur përdorni faqen tonë të internetit dhe shërbimet tona.
            </p>

            <h2 className="legal-h2">2. Të dhënat që mbledhim</h2>
            <p>
              Mund të mbledhim të dhëna që ju furnizoni drejtpërdrejt (p.sh. emri, email, numri i telefonit, mesazhet
              përmes formës së kontaktit), të dhëna të përdorimit të faqes (adresa IP, lloji shfletuesi, faqet e
              vizituara) dhe cookies për të përmirësuar përvojën tuaj dhe për qëllime statistikore, sipas zgjedhjes tuaj.
            </p>

            <h2 className="legal-h2">3. Si i përdorim të dhënat</h2>
            <p>
              Të dhënat përdoren për t&apos;ju përgjigjur kërkesave tuaja (ofertë, pyetje, kontakte), për të menaxhuar
              marrëdhëniet kontraktuale, për përmirësimin e faqes dhe shërbimeve tona, dhe, me pëlqimin tuaj kur
              aplikohet, për komunikime marketingu ose analitikë. Nuk i shesim të dhënat tuaja personale palëve të treta.
            </p>

            <h2 id="cookies" className="legal-h2">
              4. Cookies dhe teknologji të ngjashme
            </h2>
            <p>
              Përdorim &quot;cookies&quot; dhe mekanizma të ngjashme për të mbajtur preferencat, për sigurinë e faqes dhe
              për të kuptuar si përdoret faqja. Disa cookies janë të nevojshme që faqja të funksionojë (p.sh. për të
              mbajtur zgjedhjen tuaj për cookies); të tjerat janë opsionale (p.sh. analitikë). Ju mund të pranoni të
              gjitha, vetëm ato thelbësore, ose të refuzoni ato opsionale në çdo kohë përmes bannerit të cookies ose
              duke na kontaktuar.
            </p>
            <ul className="legal-list">
              <li>
                <strong>Cookies thelbësore:</strong> të nevojshme për navigimin, sigurinë dhe ruajtjen e preferencave
                (p.sh. pranimi i cookies).
              </li>
              <li>
                <strong>Cookies funksionale:</strong> për të mbajtur zgjedhjet (p.sh. gjuha) në vizitat e ardhshme.
              </li>
              <li>
                <strong>Cookies analitike:</strong> për të matur trafikun dhe përdorimin e faqes (mund të çaktivizohen nëse
                refuzoni cookies jo-thelbësore).
              </li>
            </ul>

            <h2 className="legal-h2">5. Bazat ligjore dhe ruajtja</h2>
            <p>
              Përpunojmë të dhënat në bazë të kontratës (për shërbimet që kërkohen), të pëlqimit tuaj (për cookies
              opsionale dhe komunikime) dhe të interesit legitim (p.sh. përmirësimi i faqes). Ruajmë të dhënat vetëm për
              aq kohë sa është e nevojshme për qëllimin për të cilin u mblodhën ose sipas kërkesave ligjore.
            </p>

            <h2 className="legal-h2">6. Të drejtat tuaja</h2>
            <p>
              Sipas ligjeve në fuqi në Kosovë dhe mbrojtjes së të dhënave, ju keni të drejtë të aksesoni, ndreqni ose
              fshini të dhënat tuaja personale, të kufizoni përpunimin, të kundërshtoni, dhe të tërhiqni pëlqimin. Për
              të ushtruar këto të drejta, na kontaktoni në{" "}
              <a href="mailto:info@uniproject-ks.com">info@uniproject-ks.com</a>. Ju gjithashtu mund të ankoheni te
              autoriteti kompetent për mbrojtjen e të dhënave.
            </p>

            <h2 className="legal-h2">7. Ndryshime dhe kontakt</h2>
            <p>
              Ne mund të përditësojmë këtë politikë herë pas here. Versioni i përditësuar do të publikohet në këtë faqe
              me datën e fundit të ndryshimit. Për çdo pyetje në lidhje me privatësinë ose cookies, na shkruani në{" "}
              <a href="mailto:info@uniproject-ks.com">info@uniproject-ks.com</a> ose vizitoni{" "}
              <Link href="/kontakt">faqen e kontaktit</Link>.
            </p>

            <p className="legal-updated">
              E fundit e përditësuar: Mars 2026. © 2026 UNI PROJECT Sh.P.K.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
