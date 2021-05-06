export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? 'Default'}</strong>
      <p>{repository?.description ?? 'Forms'}</p>

      <a href={repository?.html_url ?? '#'}>
        Acessar repositório
      </a>
    </li>
  );
}