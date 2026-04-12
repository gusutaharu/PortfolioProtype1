import Link from 'next/link';

import { getGitHubProfile } from '@/lib/github';

export async function GraphTest() {
  const user = await getGitHubProfile();
  return (
    <div>
      <h1>
        Hello, {user.name} (@{user.login})
      </h1>
      <h3>最近作ったリポジトリ:</h3>
      <ul>
        {user.repositories.nodes.map((repo: { name: string; url: string }) => (
          <li key={repo.name}>
            <Link href={repo.url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
