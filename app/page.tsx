'use client';

import { useEffect, useState } from 'react';

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
      </main>
    </div>
  );
}
