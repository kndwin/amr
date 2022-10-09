import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="w-full h-full min-h-screen bg-stone-100">
      <header className="container mx-auto py-4 flex justify-between">
        <h1 className="font-bold text-2xl">Amr portfolio</h1>
        <div className="flex items-center gap-8">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/project">
            <a>Project</a>
          </Link>
        </div>
      </header>
      <main className="container mx-auto">
        <h1>Blog</h1>
      </main>
    </div>
  );
}
