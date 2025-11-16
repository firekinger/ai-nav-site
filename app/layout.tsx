import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AI Navigation Directory",
    template: "%s | AI Navigation Directory",
  },
  description: "Explore The Best AI Websites & Tools.",
  keywords: ["The Best AI Websites", "AI Navigation", "AI Tools Directory"],
  authors: [{ name: "firekinger" }],
  creator: "firekinger",
  publisher: "firekinger",
  openGraph: {
    type: "website",
    siteName: "AI Navigation Directory",
    images: [
      {
        url: "/ainavdir.com.jpg",
        width: 1280,
        height: 800,
        alt: "AI Navigation Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ainavdir",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <Header />
        <main className="flex-grow bg-gray-50">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}