import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToastContext from "@/context/ToastContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  flex flex-col min-h-screen `}
      >
        <Header />
        <ToastContext />
        {children}
        <Footer />
      </body>
    </html>
  );
}
