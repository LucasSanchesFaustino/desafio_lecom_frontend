import React from "react";

const RepoItem = ({repo}) => (
    <a 
        href={repo.html_url}
        className="repoItemContainer"
        target="_blank"
    >
        <span>Nome do Repositório: {repo.name}</span>
        <span>Estrelas: {repo.stargazers_count}</span>
        <span>Forks: {repo.forks}</span>
        <span>Issues Abertas: {repo.open_issues}</span>
        <span>Linguagem Principal: {repo.language}</span>
    </a>
);

export default RepoItem;