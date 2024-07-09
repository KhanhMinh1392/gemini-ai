import Sidebar from '@/components/sidebar';
import { ChevronDown, Grip, Sparkle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <section className="flex-1">
        <header className="sticky top-0 mx-5 mt-4 flex items-center justify-between">
          <h1 className="flex items-center gap-2 text-xl">
            Gemini <ChevronDown width={14} height={14} />
          </h1>
          <div className="flex items-center gap-3">
            <Link
              href=""
              className="flex gap-2 rounded-lg bg-gray-200 px-4 py-[.625rem] text-xs font-medium hover:bg-gray-300"
            >
              <Sparkle width={16} height={16} fill="red" color="black" />
              <span>Dùng thử Gemini Advanced</span>
            </Link>
            <div className="cursor-pointer rounded-full p-2 hover:bg-gray-200">
              <Grip width={20} height={20} />
            </div>
            <Image
              src={'/avatar.png'}
              alt="avatar"
              width={100}
              height={100}
              priority
              className="h-9 w-9 rounded-full object-cover"
            />
          </div>
        </header>
      </section>
    </main>
  );
}
