"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TicketForm, type TicketFormValues } from "./ticket-form";
import { Ticket } from "@/lib/tickets";

interface TicketDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  ticket?: Ticket;
  onSubmit: (data: TicketFormValues) => Promise<void>;
}

export function TicketDialog({
  open,
  onOpenChange,
  ticket,
  onSubmit,
}: TicketDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {ticket ? "Edit Ticket" : "Create New Ticket"}
          </DialogTitle>
          <DialogDescription>
            {ticket
              ? "Make changes to your ticket here."
              : "Fill in the details for your new ticket."}
          </DialogDescription>
        </DialogHeader>
        <TicketForm
          ticket={ticket}
          onSubmit={onSubmit}
          onCancel={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
