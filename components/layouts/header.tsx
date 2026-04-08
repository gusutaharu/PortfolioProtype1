'use client';

import { AnimatePresence, motion } from 'motion/react';
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
  const variantTop = {
    closed: { rotate: 0, y: 0 },
    opened: { rotate: 45, y: 9 },
  };

  const variantCenter = {
    closed: { opacity: 1, x: 0 },
    opened: { opacity: 0, x: 20 },
  };

  const variantBottom = {
    closed: { rotate: 0, y: 0 },
    opened: { rotate: -45, y: -9 },
  };

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
          <motion.span
            variants={variantTop}
            animate={isOpen ? 'opened' : 'closed'}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="btn-bar"
          />
          <motion.span
            variants={variantCenter}
            animate={isOpen ? 'opened' : 'closed'}
            transition={{ duration: 0.2 }}
            className="btn-bar"
          />
          <motion.span
            variants={variantBottom}
            animate={isOpen ? 'opened' : 'closed'}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="btn-bar"
          />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="nav-mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ul>
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
