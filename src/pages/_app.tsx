import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "@/context/AuthContext";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import React from "react";

const client = new QueryClient();

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>SocialMate - A melhor comunidade de aprendizagem</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/unionLogo.svg" />
      </Head>
      <QueryClientProvider client={client}>
        <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
      </QueryClientProvider>
    </>
  );
}
