import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "대학교 모아보기",
  description: "전국 대학 위치, 학과 정보, 모집요강을 지도에서 확인하는 서비스입니다.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
