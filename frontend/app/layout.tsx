import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/authContext";
import { Toaster } from "@/components/ui/sonner";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Pixtopia — GDG Event",
  description: "A Pixar-themed team competition event by GDG on Campus RCOEM — featuring multi-round quizzes, puzzles, and creative challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bebasNeue.variable}>
      <body className="antialiased">
        <AuthProvider>
          {children}
          <Toaster position="top-right" theme="dark" closeButton />
        </AuthProvider>
      </body>
    </html>
  );
}
