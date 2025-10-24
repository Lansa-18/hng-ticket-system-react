"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Ticket, TicketStatus } from "@/lib/tickets";

const ticketSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title cannot exceed 100 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description cannot exceed 1000 characters"),
  status: z.enum(["open", "in-progress", "closed"] as const),
});

export type TicketFormValues = z.infer<typeof ticketSchema>;

interface TicketFormProps {
  ticket?: Ticket;
  onSubmit: (data: TicketFormValues) => Promise<void>;
  onCancel: () => void;
}

export function TicketForm({ ticket, onSubmit, onCancel }: TicketFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TicketFormValues>({
    resolver: zodResolver(ticketSchema),
    defaultValues: ticket
      ? {
          title: ticket.title,
          description: ticket.description,
          status: ticket.status,
        }
      : {
          status: "open" as TicketStatus,
        },
  });

  const onFormSubmit = async (data: TicketFormValues) => {
    setIsSubmitting(true);
    try {
      await onSubmit(data);
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to save ticket"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4 mt-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input {...register("title")} id="title" disabled={isSubmitting} />
        {errors.title && (
          <p className="text-sm text-destructive">{errors.title.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          {...register("description")}
          id="description"
          rows={4}
          disabled={isSubmitting}
        />
        {errors.description && (
          <p className="text-sm text-destructive">
            {errors.description.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="status">Status</Label>
        <Select
          onValueChange={(value) => setValue("status", value as TicketStatus)}
          value={watch("status")}
          disabled={isSubmitting}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
        {errors.status && (
          <p className="text-sm text-destructive">{errors.status.message}</p>
        )}
      </div>

      <div className="flex justify-end space-x-3">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="bg-blue-700 hover:bg-blue-500"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Saving..."
            : ticket
              ? "Update Ticket"
              : "Create Ticket"}
        </Button>
      </div>
    </form>
  );
}
