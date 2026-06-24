import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const SLACK_WEBHOOK_URL = Deno.env.get('SLACK_WEBHOOK_URL')!

serve(async (req) => {
  // Handle preflight CORS requests from browser environments
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: { 'Access-Control-Allow-Origin': '*' } })
  }

  try {
    const payload = await req.json()
    const { record } = payload

    // Format the Slack message block beautifully
    const slackMessage = {
      text: `📬 *New Contact Form Submission!*`,
      attachments: [
        {
          color: "#3B00C5", // Karevo brand accent color
          fields: [
            { title: "Name", value: record.name, short: true },
            { title: "Email", value: record.email, short: true },
            { title: "Message", value: record.message, short: false }
          ],
          ts: Math.floor(Date.now() / 1000)
        }
      ]
    }

    // Fire the request directly to Slack's servers
    await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(slackMessage)
    })

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})