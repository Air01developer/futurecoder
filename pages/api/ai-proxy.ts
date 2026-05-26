import type { NextApiRequest, NextApiResponse } from 'next'

// Simple server-side proxy for OpenAI (Chat Completion).
// Usage: POST /api/ai-proxy with JSON { messages: [{role:'user', content:'...'}], model: 'gpt-4o-mini' }
// Requires environment variable: OPENAI_API_KEY

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) return res.status(500).json({ error: 'OpenAI API key is not configured on the server.' })

  try {
    const body = req.body
    // Basic validation
    if (!body || !body.messages) return res.status(400).json({ error: 'Missing messages in request body.' })

    // Proxy to OpenAI Chat Completions (example)
    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: body.model || 'gpt-4o-mini',
        messages: body.messages,
        max_tokens: body.max_tokens || 600
      })
    })

    const data = await openaiRes.json()
    return res.status(openaiRes.status).json(data)
  } catch (err: any) {
    console.error('AI proxy error', err)
    return res.status(500).json({ error: 'Proxy error', details: err.message || String(err) })
  }
}
