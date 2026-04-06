import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <Link href="/" className="logo">
        Portfolio
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="/">TOP</Link>
        </li>
        <li>
          <Link href="/">Skils</Link>
        </li>
        <li>
          <Link href="/">Project</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </header>
  );
};
