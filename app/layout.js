import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Artem Tsatsin / nuxdie",
  description:
    "Practical AI/software tools, internal systems, and fast prototypes by Artem Tsatsin.",
  metadataBase: new URL("https://tsatsin.com"),
  openGraph: {
    title: "Artem Tsatsin / nuxdie",
    description:
      "Practical AI/software tools, internal systems, and fast prototypes by Artem Tsatsin.",
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
