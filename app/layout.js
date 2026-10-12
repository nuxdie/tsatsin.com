import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Artem Tsatsin / nuxdie",
  description:
    "Artem Tsatsin: engineer and engineering manager in Amsterdam (Booking.com, LiveJournal), building with AI agents. Open to full-time roles.",
  metadataBase: new URL("https://tsatsin.com"),
  openGraph: {
    title: "Artem Tsatsin / nuxdie",
    description:
      "Artem Tsatsin: engineer and engineering manager in Amsterdam (Booking.com, LiveJournal), building with AI agents. Open to full-time roles.",
    url: "https://tsatsin.com",
    siteName: "tsatsin.com",
    type: "website",
  },
  alternates: {
    canonical: "https://tsatsin.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
