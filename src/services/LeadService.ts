export interface LeadPayload {
    email: string;
}

export async function createLead(payload: LeadPayload) {
    try {

        const response = await fetch('https://api.lifyo.co/api/v1/leads/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const text = await response.text();
            throw new Error(text || 'Error al registrar el lead');
        }

        return response.json();
    } catch (err: any) {
        throw new Error(err.message || 'Error desconocido');
    }
}
