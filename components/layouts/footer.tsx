import Link from 'next/link';

import { NAV_ITEMS } from '@/constants/navigation';

import { GithubIcon } from '../ui/githubicon';
import { QiitaIcon } from '../ui/qitaicon';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-content-left">
          <Link href="/">gusutaharu</Link>
          <div className="icon-area">
            <GithubIcon />
            <QiitaIcon />
          </div>
        </div>
        <div className="footer-content-right">
          <ul className="footer-nav">
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="copyright">
        <span>
          &copy; {new Date().getFullYear()} gusutaharu&apos;s portfolio. All
          rights reserved.
        </span>
      </div>
    </footer>
  );
};
