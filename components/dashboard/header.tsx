"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth-provider";
import { LogOut } from "lucide-react";

export function DashboardHeader() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 sm:py-6 gap-4 sm:gap-0">
          <div className="flex items-center w-full sm:w-auto justify-between sm:justify-start space-x-4 sm:space-x-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              TrackiT
            </h2>
            <nav className="flex sm:hidden">
              <Link
                href="/dashboard"
                className="text-gray-700 hover:text-blue-600 px-2 py-1 text-sm font-medium"
              >
                Dashboard
              </Link>
              <Link
                href="/dashboard/tickets"
                className="text-gray-700 hover:text-blue-600 px-2 py-1 text-sm font-medium"
              >
                Tickets
              </Link>
            </nav>
          </div>

          <nav className="hidden sm:flex space-x-4">
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/tickets"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Tickets
            </Link>
          </nav>

          <div className="flex items-center justify-between w-full sm:w-auto space-x-4">
            <span className="text-lg sm:text-xl font-bold text-gray-700 truncate">
              {user?.name}
            </span>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <LogOut size={15} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
