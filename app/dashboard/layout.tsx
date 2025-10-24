"use client";

import { ProtectedRoute } from "@/components/auth/protected-route";
import { DashboardHeader } from "@/components/dashboard/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <DashboardHeader />
        <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </ProtectedRoute>
  );
}
