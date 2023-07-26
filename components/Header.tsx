import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { type ReactElement } from "react";


function Header(): ReactElement {
  return (
    <header className="text-gray-600 body-font">
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5337133458846513"
          crossOrigin="anonymous"
         />
      </Head>
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <Link
          href="/"
          className="flex items-center mb-4 font-medium text-gray-900 md:mb-0 title-font">

          <Image alt="logo" width="30" height="30" src="/logo.png" />
          <span className="ml-3 text-xl">Next Demo App</span>

        </Link>
        <nav className="flex flex-wrap justify-center items-center text-base md:mr-auto md:ml-auto">
          {process.env.NODE_ENV === "development" && (
            <Link href="/api-doc" className="mr-5 hover:text-gray-900">
              API Doc
            </Link>
          )}
          <Link href="/projects" className="mr-5 hover:text-gray-900">
            Projects
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
