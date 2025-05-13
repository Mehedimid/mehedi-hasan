'use client';

import { useEffect, useState } from 'react';
import Loader from '@/components/shared/loading/Loader';
import Banner from '@/components/banner/Banner';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <main>
        <Banner />
      </main>
    </>
  );
}
