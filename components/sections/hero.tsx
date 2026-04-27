import { GithubIcon } from '../ui/githubicon';
import { QiitaIcon } from '../ui/qitaicon';

export const Hero = () => {
  return (
    <section className="hero-section">
      <div>
        <h1 className="top-message">
          gusutaharu&apos;s
          <br />
          portfolio
        </h1>
      </div>
      <div className="hero-sub">
        <p>今、選ばれるものをつくる。</p>
        <div className="hero-links">
          <GithubIcon />
          <QiitaIcon />
        </div>
      </div>
    </section>
  );
};
