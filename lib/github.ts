import 'server-only';

import { Repository } from '@/lib/difinitions';

// コンポーネント側に返却する、極限まで削ぎ落とした安全なデータ型（DTO）
export type LanguageSkillDTO = {
  name: string;
  ratio: number;
};

export async function getTopLanguageSkills(): Promise<LanguageSkillDTO[]> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.error('Missing GITHUB_TOKEN environment variable');
    return [];
  }

  const query = `
    query {
      viewer {
        login
        repositories(first: 50, orderBy: {field: CREATED_AT, direction: DESC}) {
          nodes {
            name
            languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
              totalSize
              edges {
                size
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`GitHub API responded with status: ${res.status}`);
      return [];
    }

    const result = await res.json();

    const repositories = result?.data?.viewer?.repositories?.nodes as
      | Repository[]
      | undefined;
    if (!repositories || repositories.length === 0) {
      return [];
    }
    const languTotals: { [key: string]: number } = {};
    let allSize = 0;

    repositories.forEach((repo) => {
      allSize += repo.languages?.totalSize || 0;

      repo.languages?.edges?.forEach((edge) => {
        if (!edge?.node) return;
        const { name } = edge.node;
        const size = edge.size || 0;

        if (!languTotals[name]) {
          languTotals[name] = 0;
        }
        languTotals[name] += size;
      });
    });

    if (allSize === 0) {
      return [];
    }

    const sortedLanguages: LanguageSkillDTO[] = Object.entries(languTotals)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, size]) => ({
        name,
        ratio: size / allSize,
      }));

    return sortedLanguages;
  } catch (error) {
    console.error('Failed to fetch or process GitHub profile:', error);
    return [];
  }
}
