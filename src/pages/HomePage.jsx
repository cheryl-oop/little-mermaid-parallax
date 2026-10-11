import { useProject } from "../hooks/useProjects";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Link } from "react-router";
import styles from "./css/HomePage.module.css";

const baseUrl = import.meta.env.BASE_URL;

// Randomising
const getRandomProjects = (data, count) => {
  return [...data].sort(() => Math.random() - 0.5).slice(0, count);
};

export const HomePage = () => {
  const { data, loading, error } = useProject();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const featured = getRandomProjects(data, 1)[0];

  const featuredProjects = getRandomProjects(data, 5);

  const newcomers = [...data]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  return (
    <>
      <Header />

      {/* Featured Banner */}
      {featured && (
        <div
          className={styles.featured}
          style={{ backgroundImage: `url(${baseUrl}${featured.thumbnail})` }}
        >
          <div className={styles.featuredOverlay}>
            <div className={styles.featuredCard}>
              <h1 className={styles.featuredTitle}>{featured.name}</h1>
              <p className={styles.featuredStudent}>{featured.student}</p>
              <Link
                to={`/librarypage/${featured.id}`}
                className={styles.featuredButton}
              >
                View Project
              </Link>
            </div>
          </div>
        </div>
      )}

      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>About us</h2>
          <p className={styles.sectionp}>
            Welkom in onze sprookjesbibliotheek vol magische verhalen en
            creatieve avonturen! Deze portal verzamelt alle projecten van de
            opdracht Front End: And They Lived Happily Ever After, waar elke
            student een eigen interactieve sprookjeswereld tot leven bracht.
          </p>
          <Link to="/librarypage" className={styles.buttonProjects}>
            View all projects →
          </Link>
        </section>
        {/* Featured 5 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Featured</h2>
          <div className={styles.row}>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Newcomers */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Newcomers</h2>
          <div className={styles.row}>
            {newcomers.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};
