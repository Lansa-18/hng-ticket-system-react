"use client";

import { useState } from "react";
import { Ticket } from "@/lib/tickets";
import { toast } from "sonner";

interface TicketCardProps {
  ticket: Ticket;
  onEdit: (ticket: Ticket) => void;
  onDelete: (ticket: Ticket) => Promise<void>;
}

export function TicketCard({ ticket, onEdit, onDelete }: TicketCardProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20";
      case "in-progress":
        return "bg-amber-50 text-amber-700 ring-1 ring-amber-600/20";
      case "closed":
        return "bg-gray-100 text-gray-700 ring-1 ring-gray-600/20";
      default:
        return "bg-blue-50 text-blue-700 ring-1 ring-blue-600/20";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this ticket?")) {
      return;
    }

    setIsDeleting(true);
    try {
      await onDelete(ticket);
      toast.success("Ticket deleted successfully");
    } catch (error) {
      toast.error("Failed to delete ticket");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="bg-white shadow-sm rounded-lg p-4 sm:p-5 hover:shadow-md transition-shadow border border-gray-100">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
            {ticket.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {ticket.description}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`px-2.5 py-0.5 inline-flex text-xs leading-5 font-medium rounded-full whitespace-nowrap ${getStatusColor(
              ticket.status
            )}`}
          >
            {ticket.status.replace("-", " ")}
          </span>
        </div>
      </div>

      <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-xs sm:text-sm text-gray-500 space-y-1">
          <p>Created: {formatDate(ticket.createdAt)}</p>
          <p>Last Updated: {formatDate(ticket.updatedAt)}</p>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => onEdit(ticket)}
            className="text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="text-xs sm:text-sm font-medium text-red-600 hover:text-red-800 transition-colors"
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
