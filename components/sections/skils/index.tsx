import { SkillChart } from './skill-chart';
import { SkillCounter } from './skill-counter';

export const Skills = () => {
  const value = 0.5;
  const numberOfCircles = [1, 2, 3, 4, 5];
  return (
    <section className="skils-section">
      <h2 className="section-title">Skills</h2>
      <div className="github-data">
        <h3 className="skil-title">GitHub Data</h3>
        <div className="charts-area">
          {numberOfCircles.map((i) => (
            <div key={i} className="chart-item">
              <SkillChart value={value} />
              <SkillCounter value={value} />
            </div>
          ))}
        </div>
        <p className="charts-description">
          ※自身のGithubアカウントのオープンリポジトリの使用言語率を元に算出。
        </p>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};
