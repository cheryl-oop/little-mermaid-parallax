import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import styles from "./css/MakingOfPage.module.css";

const baseUrl = import.meta.env.BASE_URL;

export const MakingOfPage = () => {
  return (
    <>
      <Header />

      {/* Banner */}
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${baseUrl}making-of-banner.png)` }}
      >
        <div className={styles.bannerOverlay}>
          <h1 className={styles.bannerTitle}>Making Of</h1>
        </div>
      </div>

      <main className={styles.page}>
        {/* Over het project */}
        <section className={styles.section}>
          <img
            src={`${baseUrl}thumbnails/mermaid_thumbnail.png`}
            alt="Over het project"
            className={styles.sectionImage}
          />
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Over het project</h2>
            <p className={styles.sectionText}>
              Voor dit project maakte ik een interactieve parallax-website
              gebaseerd op De Kleine Zeemeermin. Ik wilde het klassieke sprookje
              niet alleen visueel mooi voorstellen, maar ook de diepere
              boodschap ervan tonen. Voor mij is De Kleine Zeemeermin een
              waarschuwend verhaal over hoe gevaarlijk het kan zijn om alles op
              te offeren voor iemand anders en jezelf daarin te verliezen. Het
              verhaal benadrukt hoe belangrijk eigenwaarde en zelfliefde zijn.
            </p>
          </div>
        </section>

        {/* Gebruikte technieken */}
        <section className={`${styles.section} ${styles.sectionReverse}`}>
          <img
            src={`${baseUrl}making-of-2.png`}
            alt="Gebruikte technieken"
            className={styles.sectionImage}
          />
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Gebruikte technieken</h2>
            <p className={styles.sectionText}>
              Voor de ontwikkeling van deze website maakte ik gebruik van:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>React</li>
              <li className={styles.listItem}>Vite</li>
              <li className={styles.listItem}>
                Motion / Framer Motion voor animaties en overgangen
              </li>
            </ul>
            <p className={styles.sectionText}>
              De volledige parallax-ervaring werd opgebouwd met verschillende
              lagen en geanimeerde scènes om meer diepte en beweging in het
              verhaal te brengen.
            </p>
          </div>
        </section>

        {/* Assets & design */}
        <section className={styles.section}>
          <img
            src={`${baseUrl}making-of-3.png`}
            alt="Assets en design"
            className={styles.sectionImage}
          />
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Assets & design</h2>
            <p className={styles.sectionText}>
              Alle assets van de parallax-website heb ik zelf ontworpen met
              behulp van:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Adobe Illustrator</li>
              <li className={styles.listItem}>Figma</li>
            </ul>
            <p className={styles.sectionText}>
              Hierdoor kon ik de stijl en sfeer van het sprookje volledig zelf
              bepalen en aanpassen aan de storytelling van de website.
            </p>
          </div>
        </section>

        {/* Reflectie */}
        <section className={`${styles.section} ${styles.sectionReverse}`}>
          <img
            src={`${baseUrl}making-of-4.png`}
            alt="Reflectie"
            className={styles.sectionImage}
          />
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Reflectie</h2>
            <p className={styles.sectionText}>
              Dit project was een erg leerrijke ervaring. Ik heb niet alleen
              mijn kennis van React en animaties verder kunnen ontwikkelen, maar
              ook geleerd hoe belangrijk compositie, storytelling en responsive
              design zijn binnen frontend development. Vooral het combineren van
              design en code maakte deze opdracht creatief én uitdagend.
            </p>
          </div>
          <a
            href="https://ehb-mct.github.io/FrontEnd-Little_Mermaid-Cheryl_Aitchedji/littleMermaidPage"
            className={styles.button}
          >
            View Project
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
};
