import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <div>
        <div className="text-green-500">
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  About us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title"> refactoring</p>
      </div>
    </header>
  );
};

export default Header;
