import type { Metadata } from "next";
import localFont from "next/font/local";
import '../styles/globals.css';


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
  title: "QuadVertex",
  description: "QuadVertex | The leading IT, Software, Web, App, and Emerging Technologies Services & Solutions | Enabling & Transforming Digitally Fortune 500 Clients",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/icon.ico',
        href: '/icon.ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/icon-dark.ico',
        href: '/icon-dark.ico',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
