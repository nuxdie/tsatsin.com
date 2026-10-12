import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body" });

const description =
  "Artem Tsatsin, engineer and former engineering manager in Amsterdam (Booking.com, LiveJournal), building with AI agents. Open to full-time roles.";

export const metadata = {
  title: "Artem Tsatsin",
  description,
  metadataBase: new URL("https://tsatsin.com"),
  openGraph: {
    title: "Artem Tsatsin",
    description,
    url: "https://tsatsin.com",
    siteName: "tsatsin.com",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Artem Tsatsin" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: {
    canonical: "https://tsatsin.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
