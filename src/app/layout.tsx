import type { Metadata } from "next";
import Head from "next/head";
import { Poppins } from "next/font/google";
import '@/shared/styles/styles.scss'
import AppRoot from "@/_app/AppRoot";
import { MainLayout } from "@/_app/layouts/MainLayout";

const poppins = Poppins({
  variable: "--font-family",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "Moviesea",
  description: "Movies search web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png"></link>
        <link rel="manifest" href="/public/site.webmanifest"></link>
      </Head>
      <body className={poppins.variable}>
        <AppRoot>
          <MainLayout>{children}</MainLayout>
        </AppRoot>
      </body>
    </html>
  );
}
