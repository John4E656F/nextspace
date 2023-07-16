import Link from 'next/link';
import Image from 'next/image';
import { AuthCheck } from './AuthCheck';
import { SignInButton, SignOutButton } from './buttons';

export const Navbar = () => {
  return (
    <nav className='flex bg-[#1d4ed8] color-[#fff] h-[70px] justify-between items-center px-5'>
      <Link href='/'>
        <Image src='/logo.svg' width={216} height={30} alt='NextSpace Logo' />
      </Link>
      <ul className='flex gap-2  items-center'>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/blog'>Blog</Link>
        </li>
        <li>
          <Link href='users'>Users</Link>
        </li>
        <li>
          <SignInButton />
        </li>

        <li>
          <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </li>
      </ul>
    </nav>
  );
};
