// api/webhook.js - Sintaxis para Vercel
export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const n8nUrl = 'http://167.172.31.249:5678/webhook-test/form';
    
    const response = await fetch(n8nUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.text(); // Cambiar a text() por si n8n no devuelve JSON válido
    
    res.status(200).json({ message: 'Enviado correctamente', data: data });
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      message: 'Error al enviar datos',
      error: error.message 
    });
  }
}