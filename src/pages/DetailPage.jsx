import { useParams } from "react-router";
import { useProject } from "../hooks/useProjects";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Link } from "react-router";
import styles from "./css/DetailPage.module.css";

const baseUrl = import.meta.env.BASE_URL;

export const DetailPage = () => {
  const { data, loading, error } = useProject();
  const { projectId } = useParams();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const project = data.find((project) => project.id === projectId);

  if (!project) return <p>Project niet gevonden!</p>;

  return (
    <>
      <Header />
      <img
        src={`${baseUrl}${project.thumbnail}`}
        alt={project.name}
        className={styles.banner}
      />
      <div className={styles.content}>
        <aside className={styles.infoCard}>
          <h2>{project.name}</h2>
          <div>
            <p className={styles.label}>Student</p>
            <p>{project.student}</p>
          </div>
          <div>
            <p className={styles.label}>Auteur</p>
            <p>{project.author}</p>
          </div>
          <div>
            <p className={styles.label}>Genre</p>
            <div className={styles.genres}>
              {project.genre.map((genre) => (
                <span key={genre} className={styles.genre}>
                  {genre}
                </span>
              ))}
            </div>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className={styles.visitButton}
          >
            Visit Project
          </a>
        </aside>
        <div className={styles.description}>
          <p className={styles.descriptionp}>Project</p>
          <h2>Beschrijving</h2>
          <p>{project.description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};
