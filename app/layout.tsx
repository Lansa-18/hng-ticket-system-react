import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { AuthProvider } from "@/lib/auth-provider";
import { Toaster } from "sonner";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "TrackiT - Streamline Your Support",
  description:
    "TrackiT is a powerful and intuitive ticket management system for streamlined support operations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <AuthProvider>
          {children}
          <Toaster position="top-right" />
        </AuthProvider>
      </body>
    </html>
  );
}
