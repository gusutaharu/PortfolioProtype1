export const Skils = () => {
  const numberOfCircles = [1, 2, 3, 4, 5];
  return (
    <section className="skils-section">
      <h2 className="section-title">Skills</h2>
      <div className="github-data">
        <h3 className="skil-title">GitHub Data</h3>
        <div className="charts-area">
          {numberOfCircles.map((i) => (
            <div key={i} className="chart-item">
              <svg viewBox="0 0 126 126" className="chart-svg">
                <circle cx="60" cy="60" r="60" strokeWidth="3" fill="gray" />
              </svg>
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
