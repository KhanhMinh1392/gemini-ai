import Sidebar from '@/components/sidebar';

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <section className="flex-1">Gemini</section>
    </main>
  );
}
