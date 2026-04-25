import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { SiQiita } from 'react-icons/si';

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
        <div>
          <Link href="/">gusutaharu</Link>
          <div className="flex">
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
        <div>
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <span>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
