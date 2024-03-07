import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Adding tickets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
