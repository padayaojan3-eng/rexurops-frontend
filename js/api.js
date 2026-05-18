const API_BASE = 'http://127.0.0.1:8000';

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
