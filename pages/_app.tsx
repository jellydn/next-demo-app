import { useAnalytics } from "@happykit/analytics";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Footer from "../components/Footer";
import Header from "../components/Header";
import "../flags.config";
import "../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  // Track page views
  useAnalytics({ publicKey: "analytics_pub_36f0b38212" });

  return (
    <>
      <Header />
      <div className="min-h-3/4-vh">
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
