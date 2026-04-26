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
        <div className="flex flex-col justify-center gap-4">
          <div className="flex items-center justify-center gap-4">
            <Link href="/">gusutaharu</Link>
            <div className="flex gap-2">
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
