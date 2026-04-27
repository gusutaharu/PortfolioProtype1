import Link from 'next/link';

import { GithubIcon } from '../ui/githubicon';
import { QiitaIcon } from '../ui/qitaicon';

const navItems = [
  { name: 'TOP', href: '/' },
  { name: 'Skils', href: '/' },
  { name: 'Projects', href: '/' },
  { name: 'Contact', href: '/' },
];

export const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between">
        <div className="flex flex-col justify-center gap-4">
          <div className="flex items-center justify-center gap-4">
            <Link href="/">gusutaharu</Link>
            <div className="flex gap-2">
              <GithubIcon />
              <QiitaIcon />
            </div>
          </div>
          <p>sample@sample.email</p>
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex justify-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center">
        <span>
          &copy; {new Date().getFullYear()} gusutaharu&apos;s portfolio. All
          rights reserved.
        </span>
      </div>
    </footer>
  );
};
