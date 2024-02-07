import { Providers } from "@/providers";
import "@/styles/globals.css";
import { ColorSchemeScript } from "@mantine/core";

import { Inter } from "next/font/google";
import "@mantine/core/styles.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Community Projects",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <ColorSchemeScript />
      </head>
      <body className={`font-sans ${inter.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
