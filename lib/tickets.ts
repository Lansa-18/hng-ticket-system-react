export type TicketStatus = "open" | "in-progress" | "closed";

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export interface CreateTicketData {
  title: string;
  description: string;
  status: TicketStatus;
}

export interface UpdateTicketData {
  title?: string;
  description?: string;
  status?: TicketStatus;
}

// Mock tickets data stored in memory
let mockTickets: Ticket[] = [
  {
    id: "1",
    title: "Setup Development Environment",
    description: "Need help setting up local development environment",
    status: "open",
    createdAt: "2025-10-23T10:00:00Z",
    updatedAt: "2025-10-23T10:00:00Z",
    userId: "1",
  },
  {
    id: "2",
    title: "Database Connection Issue",
    description: "Unable to connect to production database",
    status: "in-progress",
    createdAt: "2025-10-22T15:30:00Z",
    updatedAt: "2025-10-23T09:15:00Z",
    userId: "1",
  },
  {
    id: "3",
    title: "Update Documentation",
    description: "API documentation needs to be updated",
    status: "closed",
    createdAt: "2025-10-21T08:00:00Z",
    updatedAt: "2025-10-22T16:45:00Z",
    userId: "1",
  },
];

// Utility functions for ticket management
export const ticketService = {
  getTickets: (userId: string): Promise<Ticket[]> => {
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockTickets.filter((ticket) => ticket.userId === userId));
      }, 500);
    });
  },

  getTicket: (id: string, userId: string): Promise<Ticket | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const ticket = mockTickets.find(
          (t) => t.id === id && t.userId === userId
        );
        resolve(ticket || null);
      }, 500);
    });
  },

  createTicket: (data: CreateTicketData, userId: string): Promise<Ticket> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newTicket: Ticket = {
          id: Math.random().toString(36).substr(2, 9),
          ...data,
          userId,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        mockTickets.push(newTicket);
        resolve(newTicket);
      }, 500);
    });
  },

  updateTicket: (
    id: string,
    userId: string,
    data: UpdateTicketData
  ): Promise<Ticket> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = mockTickets.findIndex(
          (t) => t.id === id && t.userId === userId
        );
        if (index === -1) {
          reject(new Error("Ticket not found"));
          return;
        }

        const updatedTicket = {
          ...mockTickets[index],
          ...data,
          updatedAt: new Date().toISOString(),
        };
        mockTickets[index] = updatedTicket;
        resolve(updatedTicket);
      }, 500);
    });
  },

  deleteTicket: (id: string, userId: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = mockTickets.findIndex(
          (t) => t.id === id && t.userId === userId
        );
        if (index === -1) {
          reject(new Error("Ticket not found"));
          return;
        }
        mockTickets = mockTickets.filter((t) => t.id !== id);
        resolve();
      }, 500);
    });
  },

  getTicketStats: (
    userId: string
  ): Promise<{
    total: number;
    open: number;
    inProgress: number;
    closed: number;
  }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const userTickets = mockTickets.filter(
          (ticket) => ticket.userId === userId
        );
        resolve({
          total: userTickets.length,
          open: userTickets.filter((t) => t.status === "open").length,
          inProgress: userTickets.filter((t) => t.status === "in-progress")
            .length,
          closed: userTickets.filter((t) => t.status === "closed").length,
        });
      }, 500);
    });
  },
};
