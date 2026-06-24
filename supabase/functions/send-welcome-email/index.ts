import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  // Guard against non-POST webhook triggers
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  try {
    // Supabase Webhooks send the database row inside 'record'
    const payload = await req.json()
    const { record } = payload
    
    // Extract fields depending on whether it's a user or a hospital
    const isHospital = record.role === 'hospital'
    const targetEmail = isHospital ? record.org_email : record.email
    const targetName = isHospital ? record.hospital_name : record.name

    if (!targetEmail) {
      return new Response('No email address found in record', { status: 400 })
    }

    // Define email HTML content layout
    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 12px;">
        <h2 style="color: #3B00C5;">Welcome to the Karevo Ecosystem!</h2>
        <p>Hi <strong>${targetName}</strong>,</p>
        <p>Thanks for joining our waitlist! We are thrilled to have you onboard as an early access partner.</p>
        <p>We're building a secure, lightning-fast health metrics platform, and we will update you the second our early beta slots open up.</p>
        <br />
        <p>Best regards,<br /><strong>The Karevo Team</strong></p>
      </div>
    `

    // Call the Resend API
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Karevo <onboarding@resend.dev>', // Swap this out once your domain is verified
        to: [targetEmail],
        subject: "You're on the list! 🎉 - Karevo Waitlist",
        html: htmlContent,
      }),
    })

    const resData = await res.json()

    return new Response(JSON.stringify(resData), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})