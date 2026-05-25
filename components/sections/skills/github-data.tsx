import { getTopLanguageSkills } from '@/lib/github';

import { SkillChart } from './skill-chart';
import { SkillCounter } from './skill-counter';

export async function GitHubData() {
  // DALから安全に集計済みのクリーンなDTO配列（型安全）を受け取る
  const skills = await getTopLanguageSkills();

  // 万が一データが取れなかった場合の安全な表示
  if (skills.length === 0) {
    return (
      <p className="text-gray-500">スキルデータを読み込めませんでした。</p>
    );
  }

  return (
    <>
      {skills.map(({ name, ratio }) => (
        <div key={name} className="chart-item">
          {/* すでにDAL側で計算されているため、コンポーネント内での割り算（NaNリスク）が不要 */}
          <SkillChart value={ratio} />
          <SkillCounter value={ratio} />
          <span>{name}</span>
        </div>
      ))}
    </>
  );
}
