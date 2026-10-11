import { Link } from "react-router";
import styles from "./ProjectCard.module.css";
import bookCover from "../../assets/book.svg";

const baseUrl = import.meta.env.BASE_URL;

export const ProjectCard = ({ project }) => {
  return (
    <Link to={`/librarypage/${project.id}`} className={styles.card}>
      <img
        src={`${baseUrl}${project.thumbnail}`}
        alt={project.name}
        className={styles.thumbnail}
      />
      <img src={bookCover} alt="book" className={styles.bookCover} />
      <div className={styles.overlay}>
        <h2 className={styles.title}>{project.name}</h2>
        <p className={styles.author}>{project.author}</p>
        <p className={styles.student}>{project.student}</p>
      </div>
    </Link>
  );
};
