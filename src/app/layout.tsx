import { Roboto_Mono } from "next/font/google";

import "~/styles/globals.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["200"],
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className}`}>{children}</body>
    </html>
  );
}
