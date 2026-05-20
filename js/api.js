const API_BASE = window.BACKEND_URL || 'http://127.0.0.1:8000';

function fetchWithTimeout(url, options = {}, timeoutMs = 60000) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    return fetch(url, { ...options, signal: controller.signal })
        .finally(() => clearTimeout(timer));
}

async function fetchServices() {
    try {
        const res = await fetchWithTimeout(`${API_BASE}/api/services/`);
        const data = await res.json();
        return data.services || [];
    } catch {
        return [];
    }
}

async function submitServiceRequest(payload) {
    const res = await fetchWithTimeout(`${API_BASE}/api/submit-request/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    return res.json();
}
