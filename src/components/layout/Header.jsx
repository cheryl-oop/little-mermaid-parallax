import { useState } from "react";
import { Link } from "react-router";
import "../../css/index.css";
import styles from "./layout.module.css";

const baseUrl = import.meta.env.BASE_URL;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <img src={`${baseUrl}Logo.svg`} className={styles.logo} />

      <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </button>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/librarypage" onClick={() => setIsOpen(false)}>
          Projects
        </Link>
        <Link to="/makingof" onClick={() => setIsOpen(false)}>
          Making of
        </Link>
      </nav>
    </header>
  );
}
