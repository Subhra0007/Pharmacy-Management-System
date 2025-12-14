import { API_BASE_URL } from "../config";

const API_BASE = API_BASE_URL;

// Fetch all interviews
export async function fetchInterviews() {
      const response = await fetch(`${API_BASE}/api/interviews`);
      if (!response.ok) {
            const message = await response.text();
            throw new Error(message || `HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.map(mapInterviewFromApi);
}

// Fetch single interview
export async function fetchInterviewById(id) {
      const response = await fetch(`${API_BASE}/api/interviews/${id}`);
      if (!response.ok) {
            const message = await response.text();
            throw new Error(message || "Failed to fetch interview");
      }
      const data = await response.json();
      return mapInterviewFromApi(data);
}

// Create new interview
export async function createInterview(interview) {
      const response = await fetch(`${API_BASE}/api/interviews`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(interview),
      });

      if (!response.ok) {
            const message = await response.text();
            throw new Error(message || "Failed to create interview");
      }

      const data = await response.json();
      return mapInterviewFromApi(data);
}

// Update interview
export async function updateInterview(id, updates) {
      const response = await fetch(`${API_BASE}/api/interviews/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updates),
      });

      if (!response.ok) {
            const message = await response.text();
            throw new Error(message || "Failed to update interview");
      }

      const data = await response.json();
      return mapInterviewFromApi(data);
}

// Delete interview
export async function deleteInterview(id) {
      const response = await fetch(`${API_BASE}/api/interviews/${id}`, { method: "DELETE" });
      if (!response.ok) {
            const message = await response.text();
            throw new Error(message || "Failed to delete interview");
      }
      return id;
}

// Mapper helper
const mapInterviewFromApi = (i) => ({
      id: i.interviewId || i._id,
      ...i
});
