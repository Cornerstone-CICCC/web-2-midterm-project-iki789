import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Koki's Anime",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="Koki's Anime" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Koki's Anime" />
        <meta name="description" content="Best Koki's Anime in the world" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/icon-512x512.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icon-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon-512x512.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icon-512x512.png" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icon-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icon-512x512.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icon-512x512.png" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Koki's Anime" />
        <meta
          property="og:description"
          content="Best Koki's Anime in the world"
        />
        <meta property="og:site_name" content="Koki's Anime" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta
          property="og:image"
          content="https://yourdomain.com/icons/apple-touch-icon.png"
        />
      </head>
      <body
        id="app"
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-200 dark:bg-black`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
