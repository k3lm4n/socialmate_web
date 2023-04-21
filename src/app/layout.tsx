"use client";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={client}>
      <html lang="en">
        <head>
          <title>SocialMate - A melhor comunidade de aprendizagem</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/unionLogo.svg" />
        </head>
        <body className="w-full h-screen flex flex-row  bg-grey-200 rounded-r-xl">
          {children}
        </body>
      </html>
    </QueryClientProvider>
  );
}
