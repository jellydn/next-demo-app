import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = Record<string, unknown>

function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container flex flex-col items-center py-8 px-5 mx-auto sm:flex-row">
        <Link href='/' className="flex justify-center items-center font-medium text-gray-900 md:justify-start title-font">
          <Image alt="logo" src="/logo.png" width="30" height="30" />
        </Link>
        <p className="mt-4 text-sm text-gray-500 sm:py-2 sm:pl-4 sm:mt-0 sm:ml-4 sm:border-l-2 sm:border-gray-200">
          © {new Date().getFullYear()} ProductsWay —
          <a
            href="https://twitter.com/jellydn"
            className="ml-1 text-gray-600"
            rel="noopener noreferrer"
            target="_blank"
          >
            @jellydn
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
