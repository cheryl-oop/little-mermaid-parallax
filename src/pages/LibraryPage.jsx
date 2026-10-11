import { useProject } from "../hooks/useProjects";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { SearchBar } from "../components/SearchBar";
import { FilterDropdown } from "../components/FilterDropdown";
import "../css/index.css";
import styles from "./css/LibraryPage.module.css";
import { useState } from "react";

export const LibraryPage = () => {
  const { data, loading, error } = useProject();
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");

  if (error) {
    return <p>{error}</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  const allGenres = [
    "all",
    ...new Set(data.flatMap((project) => project.genre)),
  ];
  const filteredProjects = data
    .filter((project) =>
      project.name.toLowerCase().includes(search.toLowerCase()),
    )
    .filter((project) =>
      selectedGenre === "all" ? true : project.genre.includes(selectedGenre),
    );
  return (
    <>
      <Header />
      <main className={styles.page}>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.controls}>
          <SearchBar search={search} onSearch={setSearch} />
          <FilterDropdown
            genres={allGenres}
            selectedGenre={selectedGenre}
            onFilter={setSelectedGenre}
          />
        </div>
        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};
