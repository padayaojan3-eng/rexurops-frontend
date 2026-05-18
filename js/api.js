const API_BASE_URL = 'https://rexurops-backend.onrender.com/api';

async function fetchServices() {
    try {
        const res = await fetch(`${API_BASE}/api/services/`);
        const data = await res.json();
        return data.services || [];
    } catch {
        return [];
    }
}

async function submitServiceRequest(payload) {
    const res = await fetch(`${API_BASE}/api/submit-request/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    return res.json();
}
