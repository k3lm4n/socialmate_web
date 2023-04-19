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
        <body className="w-full h-screen flex flex-row  bg-grey-200 rounded-r-xl">
          {children}
        </body>
      </html>
    </QueryClientProvider>
  );
}
