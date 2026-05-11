import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { BRAND_COLOR } from '@/config/brand'

const resend = new Resend(process.env.RESEND_API_KEY)
const OWNER_EMAIL = process.env.OWNER_EMAIL || 'info@corteron.com'
const FROM = 'Corteron <info@corteron.com>'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, businessType, email, phone, message } = body

    if (!name || !businessType || !email) {
      return NextResponse.json({ error: 'Name, email, and business type are required.' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    const ts = new Date().toLocaleString('en-CA', {
      timeZone: 'America/Toronto', dateStyle: 'full', timeStyle: 'short',
    })

    await resend.emails.send({
      from: FROM,
      to: [OWNER_EMAIL],
      subject: `New Strategy Call Request: ${name} (${businessType})`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#050510;border-radius:12px;overflow:hidden;">
          <div style="background:#0D0D1F;padding:24px 32px;border-bottom:1px solid ${BRAND_COLOR}4d;">
            <h1 style="color:${BRAND_COLOR};margin:0;font-size:20px;letter-spacing:4px;font-weight:700;">CORTERON</h1>
            <p style="color:#9CA3AF;margin:6px 0 0;font-size:13px;">New Strategy Call Request</p>
          </div>
          <div style="padding:28px 32px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="color:#6B7280;padding:10px 0;font-size:13px;width:130px;border-bottom:1px solid rgba(255,255,255,0.05);">Name</td><td style="color:#FFFFFF;padding:10px 0;font-size:14px;font-weight:600;border-bottom:1px solid rgba(255,255,255,0.05);">${name}</td></tr>
              <tr><td style="color:#6B7280;padding:10px 0;font-size:13px;border-bottom:1px solid rgba(255,255,255,0.05);">Business Type</td><td style="color:#FFFFFF;padding:10px 0;font-size:14px;border-bottom:1px solid rgba(255,255,255,0.05);">${businessType}</td></tr>
              <tr><td style="color:#6B7280;padding:10px 0;font-size:13px;border-bottom:1px solid rgba(255,255,255,0.05);">Email</td><td style="padding:10px 0;font-size:14px;border-bottom:1px solid rgba(255,255,255,0.05);"><a href="mailto:${email}" style="color:${BRAND_COLOR};text-decoration:none;">${email}</a></td></tr>
              <tr><td style="color:#6B7280;padding:10px 0;font-size:13px;border-bottom:1px solid rgba(255,255,255,0.05);">Phone</td><td style="color:#FFFFFF;padding:10px 0;font-size:14px;border-bottom:1px solid rgba(255,255,255,0.05);">${phone || 'Not provided'}</td></tr>
              ${message ? `<tr><td style="color:#6B7280;padding:10px 0;font-size:13px;vertical-align:top;">Message</td><td style="color:#D1D5DB;padding:10px 0;font-size:14px;line-height:1.6;">${message}</td></tr>` : ''}
            </table>
            <div style="margin-top:20px;padding:14px 16px;background:${BRAND_COLOR}14;border-radius:8px;border:1px solid ${BRAND_COLOR}33;">
              <p style="color:#9CA3AF;font-size:12px;margin:0;">Submitted via corteron.com on ${ts} EST</p>
            </div>
          </div>
        </div>`,
    })

    await resend.emails.send({
      from: FROM,
      to: [email],
      subject: 'Your Corteron Strategy Call Request',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#050510;border-radius:12px;overflow:hidden;">
          <div style="background:#0D0D1F;padding:24px 32px;border-bottom:1px solid ${BRAND_COLOR}4d;">
            <h1 style="color:${BRAND_COLOR};margin:0;font-size:20px;letter-spacing:4px;font-weight:700;">CORTERON</h1>
          </div>
          <div style="padding:32px;">
            <h2 style="color:#FFFFFF;font-size:20px;margin:0 0 14px;">Hi ${name},</h2>
            <p style="color:#D1D5DB;line-height:1.7;font-size:15px;margin:0 0 14px;">Thanks for reaching out. I have received your request and will be in touch within 24 hours to book your strategy call.</p>
            <p style="color:#D1D5DB;line-height:1.7;font-size:15px;margin:0 0 24px;">On the call we will map the exact automation setup for your <strong style="color:#FFFFFF;">${businessType}</strong> business. No generic demos.</p>
            <p style="color:#D1D5DB;font-size:15px;margin:0 0 4px;">Talk soon,</p>
            <p style="color:#FFFFFF;font-weight:700;font-size:15px;margin:0 0 4px;">Gajan</p>
            <p style="color:#6B7280;font-size:13px;margin:0;">Corteron - <a href="https://corteron.com" style="color:${BRAND_COLOR};text-decoration:none;">corteron.com</a></p>
          </div>
        </div>`,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('[CORTERON] Contact error:', err)
    return NextResponse.json({ error: 'Internal server error. Please try again.' }, { status: 500 })
  }
}
