import styles from "./Filter.module.css";

export const FilterDropdown = ({ genres, selectedGenre, onFilter }) => {
  return (
    <select
      value={selectedGenre}
      onChange={(e) => onFilter(e.target.value)}
      className={styles.select}
    >
      {genres.map((genre) => (
        <option key={genre} value={genre}>{genre}</option>
      ))}
    </select>
  );
};