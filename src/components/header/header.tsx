import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <img />
        <Link href="/" passHref>
          Home
        </Link>
        <Link href="/events" passHref>
          Events
        </Link>
        <Link href="/about" passHref>
          About Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
