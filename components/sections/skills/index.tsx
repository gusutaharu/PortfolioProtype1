import { TECH_STACK } from '@/constants/skills';

import { GitHubData } from './github-data';

export const Skills = () => {
  return (
    <section className="skils-section">
      <h2 className="section-title">Skills</h2>
      <div className="github-data">
        <h3 className="skil-title">GitHub Data</h3>
        <div className="charts-area">
          <GitHubData />
        </div>
        <p className="charts-description">
          ※自身のGithubアカウントのオープンリポジトリの使用言語率を元に算出。
        </p>
      </div>
      <div className="other-skills">
        <div className="tech-stack">
          <h3 className="skil-title">技術スタック</h3>
          <ul className="skill-tags">
            {TECH_STACK.map((skill) => (
              <li className="skill-tag" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="qualifications">
          <h3 className="skil-title">保有資格</h3>
        </div>
      </div>
    </section>
  );
};
