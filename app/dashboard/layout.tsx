"use client";

import { ProtectedRoute } from "@/components/auth/protected-route";
import { DashboardHeader } from "@/components/dashboard/header";
import { Footer } from "@/components/landing/footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <DashboardHeader />
        <main className="flex-1 max-w-[90rem] w-full mx-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  );
}
