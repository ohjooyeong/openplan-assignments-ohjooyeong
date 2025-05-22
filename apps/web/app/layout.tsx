import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ReactQueryProviders from "../providers/query-provider";

const pretendard = localFont({
  src: "../static/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "사진 조회 앱",
  description: "사진 정보를 조회하는 앱입니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className}`} suppressHydrationWarning>
        <ReactQueryProviders>{children}</ReactQueryProviders>
      </body>
    </html>
  );
}
