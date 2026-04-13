import { Repository } from '@/lib/difinitions';
import { getGitHubProfile } from '@/lib/github';

import { SkillChart } from './skill-chart';
import { SkillCounter } from './skill-counter';

export async function GitHubData() {
  const repositories = (await getGitHubProfile()) as Repository[];
  const languTotals: { [key: string]: number } = {};
  let allSize = 0;

  repositories.forEach((repo) => {
    allSize += repo.languages.totalSize;
    repo.languages.edges.forEach((edge) => {
      const { name } = edge.node;
      const size = edge.size;
      if (!languTotals[name]) {
        languTotals[name] = 0;
      }
      languTotals[name] += size;
    });
  });

  const sortedLanguages = Object.entries(languTotals)
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .slice(0, 5);

  return (
    <>
      {sortedLanguages.map(([name, size]) => (
        <div key={name} className="chart-item">
          <SkillChart value={size / allSize} />
          <SkillCounter value={size / allSize} />
          <span>{name}</span>
        </div>
      ))}
    </>
  );
}
