import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LiveSupport from "@/components/LiveSupport";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Casa Central",
  description:
    "Formación integral con valores vicentinos y excelencia académica desde 1945.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className="page-container">
          <Navbar />
          <main className="page-content">{children}</main>
          <Footer />
          <LiveSupport />
        </div>
      </body>
    </html>
  );
}
