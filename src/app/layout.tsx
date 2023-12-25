import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

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
        <div className="flex min-h-screen bg-bgPrimary text-textPrimary gap-8">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
