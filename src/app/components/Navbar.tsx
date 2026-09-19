'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="flex justify-center gap-4 p-4 pt-6 border-b">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`no-underline hover:underline ${
              isActive ? 'underline decoration-2 underline-offset-5' : ''
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
