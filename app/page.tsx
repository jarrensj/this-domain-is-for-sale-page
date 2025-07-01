'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [domain, setDomain] = useState('');
  
  useEffect(() => {
    const domainName = window.location.hostname.replace(/^www\./, '');
    setDomain(domainName);
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <main className="text-center">
        <h1 className="text-2xl font-bold">{domain} is for sale</h1>
        <p className="text-gray-600">
          {process.env.NEXT_PUBLIC_EMAIL_ADDRESS && (
            <>
              Contact <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`} className="text-blue-500 hover:text-blue-700">{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</Link>
            </>
          )}
        </p>
      </main>
    </div>
  );
}
