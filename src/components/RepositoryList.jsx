import { RespositoryItem } from "./RepositoryItem";

const repository = {
  name: 'unform',
  description: 'Form in React',
  link: 'https://github.com/lucasdamata/react-github-explorer'
}

export function RepositoryList() {
  return (
    <section>
      <h1>Lista de repositórios</h1>

      <ul>
        <RespositoryItem repository={repository} />
        <RespositoryItem repository={repository} />
        <RespositoryItem repository={repository} />
        <RespositoryItem repository={repository} />
      </ul>
    </section>
  );
}
