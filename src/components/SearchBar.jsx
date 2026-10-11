import styles from "./Search.module.css";

export const SearchBar = ({ search, onSearch }) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        className={styles.input}
      />
    </div>
  );
};
