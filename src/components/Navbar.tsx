'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="flex flex-col p-4 items-center border-b">
      <div className="w-fit mx-auto text-center">
        <h1 className="text-2xl font-bold">Aiden Kimmerling</h1>
        <p className="text-xs">
          <span className="block">Sophomore • Computer Science and Math</span>
          <span className="block">University of Nebraska-Lincoln</span>
        </p>
      </div>
      <nav className="flex gap-4 pt-2">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`no-underline hover:underline ${
                isActive ? 'underline decoration-2 text-blue-500 underline-offset-5' : ''
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
