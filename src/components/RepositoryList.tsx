import { RespositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";
import { useState, useEffect } from "react";

// https://api.github.com/users/lucasdamata/repos

interface Respository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Respository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/lucasdamata/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {
          repositories.map(repository => {
            return <RespositoryItem key={repository.name} repository={repository} />
          })
        }
        
      </ul>
    </section>
  );
}
