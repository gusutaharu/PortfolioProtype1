'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { name: 'TOP', href: '/' },
  { name: 'Skils', href: '/' },
  { name: 'Projects', href: '/' },
  { name: 'Contact', href: '/' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="header-inner">
        <Link href="/" className="logo">
          Portfolio
        </Link>
        <nav className="nav-desktop">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'X' : 'Menu'}
        </button>
      </div>
      {isOpen && (
        <nav className="nav-mobile">
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
