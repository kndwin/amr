import Link from "next/link";
import Head from "next/head";
import { ReactNode } from "react";

type LayoutRootProps = {
  children: ReactNode;
};

const LayoutRoot = ({ children }: LayoutRootProps) => {
  return (
    <div className="w-full h-full min-h-screen bg-stone-100">{children}</div>
  );
};

type HeaderProps = {
  title: string;
};

const Header = (props: HeaderProps) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
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
    </>
  );
};

type MainProps = {
  children: ReactNode;
};

const Main = ({ children }: LayoutProps) => {
  return (
    <main className="container mx-auto">
      <h1>{children}</h1>
    </main>
  );
};

export const Layout = Object.assign(LayoutRoot, {
  Header,
  Main,
});
