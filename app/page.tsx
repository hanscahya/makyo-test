'use client';

import data from '../mock/data.json';
import Dropdown from '@/components/Dropdown';

export default function Home() {
  let value: string = '';

  return (
    <main className="flex min-h-screen flex-col items-center gap-12 p-24">
      <h1 className="text-4xl">Search</h1>

      {!data ? (
        <div className="skeleton h-12 w-60" />
      ) : (
        <Dropdown options={data} value={value} />
      )}
    </main>
  );
}
