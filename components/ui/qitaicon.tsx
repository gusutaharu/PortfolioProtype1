import Link from 'next/link';
import { SiQiita } from 'react-icons/si';

export const QiitaIcon = () => {
  return (
    <Link href={'/'} target="_blank" rel="noopener noreferrer">
      <SiQiita size={40} className="link-icon" />
    </Link>
  );
};
