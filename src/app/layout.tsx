import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: "Cogniverse",
  description: "Discover the latest and greatest in artificial intelligence tools and platforms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className={`font-sans bg-gray-50 dark:bg-gray-900`} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
