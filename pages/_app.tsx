import { useAnalytics } from "@happykit/analytics";
import { type AppProps } from "next/app";
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
          <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
      </div>
      <Footer />
    </>
  );
}

async function initProxy() {
  const projectKey = "clarmtri8006xfqfnpj7viuoy";
  if (typeof window !== "undefined") {
    const { setupWorker } = await import("@apihero/browser");
    // Update the allow list with the APIs you're using
    await setupWorker({
      allow: ["https://api.github.com/*"],
      projectKey,
      env: process.env.NODE_ENV,
    }).start();
  }
}

initProxy().catch(console.error);

export default MyApp;
