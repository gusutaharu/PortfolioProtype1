import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { SiQiita } from 'react-icons/si';

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
          <Link
            href="https://github.com/gusutaharu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={40} className="link-icon" />
          </Link>
          <Link href={'/'} target="_blank" rel="noopener noreferrer">
            <SiQiita size={40} className="link-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};
