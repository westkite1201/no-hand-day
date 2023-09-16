import moment from "moment";
import "./globals.css";
import Providers from "./Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "moment/locale/ko";

moment.locale("ko");
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "no hand day",
  description: "손 없는 달",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
