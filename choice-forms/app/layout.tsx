import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FORM",
  description: "Design & Developed By: ZachPascal GlobalTech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative flex flex-col h-full text-center">
        {/* Full-page video background */}
        <video
  autoPlay
  loop
  muted
  playsInline
  className="fixed top-0 left-0 w-full h-full object-cover -z-10"
>
  <source src="/ChurchWelcomeVideo.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

        {/* <Header /> */}
        <main className="relative z-10 flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
