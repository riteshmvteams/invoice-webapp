import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ThemeProvider from "@/context/ThemeContext";

const spartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invoice - webapp",
  description: "Invoices made easy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spartan.className}`}>
        <ThemeProvider>
          <div className="min-h-screen bg-bgPrimary text-textPrimary">
            <Sidebar />
            <main className="ml-52">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
