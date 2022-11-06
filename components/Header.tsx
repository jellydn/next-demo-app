import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";

interface Props {}

function Header({}: Props): ReactElement {
  return (
    <header className="text-gray-600 body-font">
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5337133458846513"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <Link href="/">
          <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            <Image alt="logo" width="30" height="30" src="/logo.png" />
            <span className="ml-3 text-xl">Next Demo App</span>
          </a>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          {process.env.NODE_ENV === "development" && (
            <Link href="/api-doc">
              <a className="mr-5 hover:text-gray-900">API Doc</a>
            </Link>
          )}
          <Link href="/projects">
            <a className="mr-5 hover:text-gray-900">Projects</a>
          </Link>
        </nav>
        <a href="https://vercel.com/new/git/external?repository-url=https://github.com/jellydn/next-demo-app/">
          <img src="https://vercel.com/button" alt="Deploy with Vercel" />
        </a>
      </div>
    </header>
  );
}

export default Header;
