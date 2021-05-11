import { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="min-h-3/4-vh">
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />;
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
