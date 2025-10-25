"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-provider";
import { ticketService } from "@/lib/tickets";

export default function DashboardPage() {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    inProgress: 0,
    closed: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      if (user) {
        setLoading(true);
        try {
          const statsData = await ticketService.getTicketStats(user.id);
          setStats(statsData);
        } catch (error) {
          console.error("Failed to fetch ticket stats:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchStats();
  }, [user]);

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Welcome back, {user?.name}!
          </h1>
          <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">
            Here&apos;s an overview of your ticket management system.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        <div className="bg-white shadow-sm rounded-lg p-4 sm:p-6">
          <h3 className="text-sm sm:text-lg font-medium text-gray-900">
            Total Tickets
          </h3>
          <p className="text-2xl sm:text-3xl font-bold text-blue-900 mt-2">
            {loading ? "..." : stats.total}
          </p>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-4 sm:p-6">
          <h3 className="text-sm sm:text-lg font-medium text-gray-900">Open</h3>
          <p className="text-2xl sm:text-3xl font-bold text-green-600 mt-2">
            {loading ? "..." : stats.open}
          </p>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-4 sm:p-6">
          <h3 className="text-sm sm:text-lg font-medium text-gray-900">
            In Progress
          </h3>
          <p className="text-2xl sm:text-3xl font-bold text-yellow-600 mt-2">
            {loading ? "..." : stats.inProgress}
          </p>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-4 sm:p-6">
          <h3 className="text-sm sm:text-lg font-medium text-gray-900">
            Resolved
          </h3>
          <p className="text-2xl sm:text-3xl font-bold text-grey-700 mt-2">
            {loading ? "..." : stats.closed}
          </p>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            Recent Activity
          </h2>
          <Link
            href="/dashboard/tickets"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium whitespace-nowrap"
          >
            View All Tickets →
          </Link>
        </div>
        <div className="border-t border-gray-200 pt-4">
          {loading ? (
            <div className="text-center py-4 text-sm sm:text-base">
              Loading...
            </div>
          ) : stats.total === 0 ? (
            <div className="text-center py-6 sm:py-8 text-sm sm:text-base text-gray-600">
              No tickets found. Create your first ticket to get started.
            </div>
          ) : (
            <div className="text-sm sm:text-base text-gray-600">
              You have {stats.open} open ticket{stats.open !== 1 ? "s" : ""}{" "}
              that need{stats.open === 1 ? "s" : ""} attention.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
