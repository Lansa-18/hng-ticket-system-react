"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-provider";
import {
  Ticket,
  ticketService,
  CreateTicketData,
  UpdateTicketData,
} from "@/lib/tickets";
import { TicketCard } from "@/components/dashboard/ticket-card";
import { TicketDialog } from "@/components/dashboard/ticket-dialog";
import { toast } from "sonner";

export default function TicketsPage() {
  const { user } = useAuth();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingTicket, setEditingTicket] = useState<Ticket | undefined>();

  useEffect(() => {
    if (user) {
      const loadTickets = async () => {
        setLoading(true);
        try {
          const fetchedTickets = await ticketService.getTickets(user!.id);
          setTickets(fetchedTickets);
        } catch (error) {
          toast.error("Failed to load tickets");
          throw error;
        } finally {
          setLoading(false);
        }
      };

      loadTickets();
    }
  }, [user]);

  const handleCreateTicket = async (data: CreateTicketData) => {
    if (!user) return;
    try {
      const newTicket = await ticketService.createTicket(data, user.id);
      setTickets((prev) => [...prev, newTicket]);
      setDialogOpen(false);
      toast.success("Ticket created successfully");
    } catch (error) {
      toast.error("Failed to create ticket");
      throw error;
    }
  };

  const handleUpdateTicket = async (data: UpdateTicketData) => {
    if (!user || !editingTicket) return;
    try {
      const updatedTicket = await ticketService.updateTicket(
        editingTicket.id,
        user.id,
        data
      );
      setTickets((prev) =>
        prev.map((t) => (t.id === updatedTicket.id ? updatedTicket : t))
      );
      setEditingTicket(undefined);
      setDialogOpen(false);
      toast.success("Ticket updated successfully");
    } catch (error) {
      toast.error("Failed to update ticket");
      throw error;
    }
  };

  const handleDeleteTicket = async (ticket: Ticket) => {
    if (!user) return;
    try {
      await ticketService.deleteTicket(ticket.id, user.id);
      setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
      toast.success("Ticket deleted successfully");
    } catch (error) {
      toast.error("Failed to delete ticket");
      throw error;
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Tickets
          </h1>
          <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">
            View and manage all your support tickets
          </p>
        </div>
        <button
          onClick={() => setDialogOpen(true)}
          className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          Create New Ticket
        </button>
      </div>

      <TicketDialog
        open={dialogOpen || !!editingTicket}
        onOpenChange={(open) => {
          setDialogOpen(open);
          if (!open) setEditingTicket(undefined);
        }}
        ticket={editingTicket}
        onSubmit={editingTicket ? handleUpdateTicket : handleCreateTicket}
      />

      <div className="space-y-4">
        {loading ? (
          <div className="text-center py-8 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="text-sm sm:text-base text-gray-600">
              Loading tickets...
            </div>
          </div>
        ) : tickets.length === 0 ? (
          <div className="text-center py-8 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="text-sm sm:text-base text-gray-600">
              No tickets found. Create your first ticket to get started.
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onEdit={setEditingTicket}
                onDelete={handleDeleteTicket}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
