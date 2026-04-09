export const Hero = () => {
  return (
    <section>
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
          <svg viewBox="0 0 100 100" width="100" height="100">
            <circle cx="50" cy="50" r="30" fill="gray" />
          </svg>
          <svg viewBox="0 0 100 100" width="100" height="100">
            <circle cx="30" cy="50" r="30" fill="gray" />
          </svg>
        </div>
      </div>
    </section>
  );
};
