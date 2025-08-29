// api/webhook.js
export default async function handler(req, res) {
  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // URL de tu n8n
    const n8nUrl = process.env.REACT_APP_N8N_WEBHOOK_URL || 'http://167.172.31.249:5678/webhook-test/form';
    
    // Hacer la petición a n8n desde el servidor de Vercel
    const response = await fetch(n8nUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    
    // Devolver la respuesta de n8n
    res.status(200).json(data);
    
  } catch (error) {
    console.error('Error al conectar con n8n:', error);
    res.status(500).json({ 
      message: 'Error al enviar datos',
      error: error.message 
    });
  }
}
