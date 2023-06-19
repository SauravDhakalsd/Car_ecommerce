import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "CarMates",
  description: "Find, Book or Buy Your Perfect Car Mate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
