import { Container } from '../components/ui/Container';

interface LegalPageProps {
  type: 'impressum' | 'datenschutz';
}

export const Legal = ({ type }: LegalPageProps) => {
  return (
    <div className="min-h-screen">
      <Container>
        <div className="py-8 sm:py-12 max-w-3xl mx-auto">
          {type === 'impressum' ? (
            <>
              <h1 className="text-4xl sm:text-5xl font-serif mb-8 text-text-primary">
                Impressum
              </h1>
              
              <div className="prose prose-lg text-text-secondary space-y-8">
                <section>
                  <h2 className="text-2xl font-serif mb-4 text-text-primary">
                    Angaben gemäss § 5 TMG
                  </h2>
                  <p>
                    Poesie Webapp<br />
                    Musterstrasse 123<br />
                    8000 Zürich<br />
                    Schweiz
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif mb-4 text-text-primary">
                    Kontakt
                  </h2>
                  <p>
                    E-Mail: kontakt@poesie.ch<br />
                    Telefon: +41 44 123 45 67
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif mb-4 text-text-primary">
                    Haftungsausschluss
                  </h2>
                  <h3 className="text-xl font-serif mb-3 text-text-primary">
                    Haftung für Inhalte
                  </h3>
                  <p>
                    Die Inhalte unserer Seiten wurden mit grösster Sorgfalt erstellt. 
                    Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte 
                    können wir jedoch keine Gewähr übernehmen.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif mb-4 text-text-primary">
                    Urheberrecht
                  </h2>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen 
                    Seiten unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, 
                    Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen 
                    des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen 
                    Autors bzw. Erstellers.
                  </p>
                </section>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-4xl sm:text-5xl font-serif mb-8 text-text-primary">
                Datenschutzerklärung
              </h1>
              
              <div className="prose prose-lg text-text-secondary space-y-8">
                <section>
                  <h2 className="text-2xl font-serif mb-4 text-text-primary">
                    Datenschutz
                  </h2>
                  <p>
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten 
                    sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und 
                    entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser 
                    Datenschutzerklärung.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif mb-4 text-text-primary">
                    Erfassung allgemeiner Informationen
                  </h2>
                  <p>
                    Wenn Sie auf unsere Webseite zugreifen, werden automatisch Informationen 
                    allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten 
                    etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen 
                    Ihres Internet Service Providers und Ähnliches.
                  </p>
                  <p>
                    Hierbei handelt es sich ausschliesslich um Informationen, welche keine 
                    Rückschlüsse auf Ihre Person zulassen. Diese Informationen sind technisch 
                    notwendig, um von Ihnen angeforderte Inhalte von Webseiten korrekt 
                    auszuliefern und fallen bei Nutzung des Internets zwingend an.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif mb-4 text-text-primary">
                    Cookies
                  </h2>
                  <p>
                    Diese Website nutzt nur technisch notwendige Cookies zur Speicherung 
                    Ihrer Theme-Präferenz (Hell-/Dunkelmodus). Es werden keine Tracking-Cookies 
                    oder Analyse-Tools verwendet.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif mb-4 text-text-primary">
                    Ihre Rechte
                  </h2>
                  <p>
                    Sie haben jederzeit das Recht auf Auskunft über die Sie betreffenden 
                    personenbezogenen Daten. Sie haben ausserdem das Recht auf Berichtigung, 
                    Löschung oder Einschränkung, ein Widerspruchsrecht gegen die Verarbeitung 
                    und ein Recht auf Datenübertragbarkeit.
                  </p>
                  <p>
                    Kontakt: datenschutz@poesie.ch
                  </p>
                </section>
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};
