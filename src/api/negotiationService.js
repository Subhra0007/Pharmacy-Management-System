import { API_BASE_URL } from "../config";

const API_BASE = `${API_BASE_URL}/api`;

export const fetchNegotiations = async () => {
      const response = await fetch(`${API_BASE}/negotiations`);
      if (!response.ok) throw new Error("Failed to fetch negotiations");
      return response.json();
};

export const createNegotiation = async (negotiationData) => {
      const response = await fetch(`${API_BASE}/negotiations`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(negotiationData),
      });
      if (!response.ok) throw new Error("Failed to create negotiation");
      return response.json();
};

export const updateNegotiation = async (id, negotiationData) => {
      const response = await fetch(`${API_BASE}/negotiations/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(negotiationData),
      });
      if (!response.ok) throw new Error("Failed to update negotiation");
      return response.json();
};

export const deleteNegotiation = async (id) => {
      const response = await fetch(`${API_BASE}/negotiations/${id}`, {
            method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete negotiation");
      return response.json();
};
