import { Resend } from 'resend';

// Initialize Resend with Vercel environment variable
const resendApiKey = process.env.RESEND_API_KEY;
const resend = new Resend(resendApiKey);

// Default sender and recipient
// Note: onboarding@resend.dev is Resend's verified sandbox domain.
// Once mzexecutivechauffeurs.com is verified in Resend DNS, RESEND_FROM_EMAIL can be set to reservations@mzexecutivechauffeurs.com
const DEFAULT_FROM = process.env.RESEND_FROM_EMAIL || 'MZS Reservations <onboarding@resend.dev>';
const DISPATCH_EMAIL = process.env.DISPATCH_EMAIL || 'info@mzexecutivechauffeurs.com';

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const payload = req.body || {};
    const {
      bookingCode = 'MZS-' + Math.floor(100000 + Math.random() * 900000),
      selectedVehicle = {},
      bookingData = {},
      passengerName = 'Executive Guest',
      passengerEmail = '',
      passengerPhone = '',
      flightNumber = '',
      notes = '',
      selectedFare = 0,
    } = payload;

    const vehicleName = selectedVehicle.name || 'Executive Vehicle';
    const vehicleSubtitle = selectedVehicle.subtitle || '';
    const serviceType = bookingData.type === 'hourly'
      ? `Hourly As-Directed (${bookingData.durationHours || 3} Hours)`
      : 'Point-to-Point Executive Transfer';

    const pickupLocation = bookingData.pickupLocation || 'Not specified';
    const dropoffLocation = bookingData.type === 'hourly'
      ? `Hourly as directed (${bookingData.durationHours || 3} hrs)`
      : (bookingData.dropoffLocation || 'Not specified');

    const pickupDate = bookingData.date || 'TBD';
    const pickupTime = bookingData.time || 'TBD';
    const distanceMiles = bookingData.distanceMiles ? `${bookingData.distanceMiles} mi` : 'Standard Distance';
    const fareFormatted = typeof selectedFare === 'number' ? `$${selectedFare.toFixed(2)}` : (selectedFare || 'Confirmed Quote');

    // Executive HTML dispatch notification template
    const dispatchHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>MZS Executive Reservation Alert</title>
</head>
<body style="margin:0;padding:24px;background-color:#0B0E14;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#E5E7EB;">
  <div style="max-width:620px;margin:0 auto;background:#111622;border:1px solid #1F2937;border-radius:16px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.5);">
    
    <!-- Top Gold Header Accent -->
    <div style="height:4px;background:linear-gradient(90deg, #D4AF37 0%, #F5E6AB 50%, #B8972E 100%);"></div>
    
    <div style="padding:28px 32px 20px 32px;background:#0F1319;border-bottom:1px solid #1F2937;">
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <div>
          <h1 style="margin:0;font-size:22px;letter-spacing:1px;font-weight:700;color:#FFFFFF;">
            MZS <span style="color:#D4AF37;font-weight:300;">EXECUTIVE CHAUFFEURS</span>
          </h1>
          <p style="margin:4px 0 0 0;font-size:12px;color:#9CA3AF;letter-spacing:0.5px;text-transform:uppercase;">
            New Online Chauffeur Reservation Alert
          </p>
        </div>
      </div>
      <div style="margin-top:16px;display:inline-block;padding:6px 14px;border-radius:999px;background:rgba(212,175,55,0.15);border:1px solid rgba(212,175,55,0.3);color:#F5E6AB;font-size:13px;font-family:monospace;font-weight:bold;">
        Confirmation #${bookingCode}
      </div>
    </div>

    <div style="padding:28px 32px;">
      
      <!-- Fare & Vehicle Hero Card -->
      <div style="background:#171E2D;border:1px solid #28354D;border-radius:12px;padding:20px;margin-bottom:24px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="vertical-align:top;">
              <span style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#9CA3AF;">Vehicle Class</span>
              <div style="font-size:18px;font-weight:bold;color:#FFFFFF;margin-top:2px;">${vehicleName}</div>
              <div style="font-size:12px;color:#CBD5E1;">${vehicleSubtitle}</div>
            </td>
            <td style="text-align:right;vertical-align:top;">
              <span style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#9CA3AF;">Guaranteed Total</span>
              <div style="font-size:24px;font-weight:800;color:#D4AF37;margin-top:2px;">${fareFormatted}</div>
              <div style="font-size:11px;color:#9CA3AF;">All-Inclusive</div>
            </td>
          </tr>
        </table>
      </div>

      <!-- Section: Journey Details -->
      <h3 style="margin:0 0 12px 0;font-size:13px;text-transform:uppercase;letter-spacing:1.5px;color:#D4AF37;border-bottom:1px solid #1F2937;padding-bottom:6px;">
        Journey Schedule & Route
      </h3>
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;font-size:14px;">
        <tr>
          <td style="padding:8px 0;color:#9CA3AF;width:140px;">Service Type:</td>
          <td style="padding:8px 0;color:#FFFFFF;font-weight:500;">${serviceType}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#9CA3AF;">Date & Time:</td>
          <td style="padding:8px 0;color:#FFFFFF;font-weight:bold;">${pickupDate} at ${pickupTime}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#9CA3AF;vertical-align:top;">Pickup Location:</td>
          <td style="padding:8px 0;color:#FFFFFF;font-weight:500;">${pickupLocation}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#9CA3AF;vertical-align:top;">Drop-off:</td>
          <td style="padding:8px 0;color:#FFFFFF;font-weight:500;">${dropoffLocation}</td>
        </tr>
        ${bookingData.type === 'transfer' ? `
        <tr>
          <td style="padding:8px 0;color:#9CA3AF;">Route Distance:</td>
          <td style="padding:8px 0;color:#CBD5E1;">${distanceMiles}</td>
        </tr>` : ''}
      </table>

      <!-- Section: Passenger Information -->
      <h3 style="margin:0 0 12px 0;font-size:13px;text-transform:uppercase;letter-spacing:1.5px;color:#D4AF37;border-bottom:1px solid #1F2937;padding-bottom:6px;">
        Passenger Information
      </h3>
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;font-size:14px;">
        <tr>
          <td style="padding:8px 0;color:#9CA3AF;width:140px;">Lead Passenger:</td>
          <td style="padding:8px 0;color:#FFFFFF;font-weight:bold;">${passengerName}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#9CA3AF;">Direct Phone:</td>
          <td style="padding:8px 0;">
            <a href="tel:${passengerPhone}" style="color:#60A5FA;text-decoration:none;font-weight:600;">
              ${passengerPhone || 'Not provided'}
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#9CA3AF;">Email Address:</td>
          <td style="padding:8px 0;">
            <a href="mailto:${passengerEmail}" style="color:#60A5FA;text-decoration:none;">
              ${passengerEmail || 'Not provided'}
            </a>
          </td>
        </tr>
        ${flightNumber ? `
        <tr>
          <td style="padding:8px 0;color:#9CA3AF;">Flight / Tail #:</td>
          <td style="padding:8px 0;color:#FDE047;font-weight:bold;font-family:monospace;">${flightNumber}</td>
        </tr>` : ''}
        ${notes ? `
        <tr>
          <td style="padding:8px 0;color:#9CA3AF;vertical-align:top;">Special Requests:</td>
          <td style="padding:8px 0;color:#E5E7EB;background:#151A24;padding:8px 12px;border-radius:6px;font-style:italic;">"${notes}"</td>
        </tr>` : ''}
      </table>

      <!-- Dispatch Quick Actions -->
      <div style="background:#0F1319;border:1px solid #1F2937;border-radius:12px;padding:16px;text-align:center;">
        <p style="margin:0 0 12px 0;font-size:12px;color:#9CA3AF;">Quick Chauffeur Dispatch Actions</p>
        <div>
          ${passengerPhone ? `
          <a href="tel:${passengerPhone}" style="display:inline-block;padding:10px 20px;border-radius:8px;background:#2563EB;color:#FFFFFF;text-decoration:none;font-size:13px;font-weight:600;margin-right:8px;">
            📞 Call Passenger
          </a>` : ''}
          ${passengerEmail ? `
          <a href="mailto:${passengerEmail}?subject=MZS%20Reservation%20%23${bookingCode}%20Update" style="display:inline-block;padding:10px 20px;border-radius:8px;background:#374151;color:#FFFFFF;text-decoration:none;font-size:13px;font-weight:600;">
            ✉️ Email Client
          </a>` : ''}
        </div>
      </div>

    </div>

    <!-- Footer -->
    <div style="padding:20px 32px;background:#0A0D13;border-top:1px solid #1F2937;font-size:11px;color:#6B7280;text-align:center;">
      <p style="margin:0;">MZS Executive Chauffeurs &bull; 245 Saw Mill River Road, Hawthorne, NY 10532</p>
      <p style="margin:4px 0 0 0;">This automated alert was dispatched via MZS Reservation Engine.</p>
    </div>

  </div>
</body>
</html>
    `.trim();

    // Send dispatch notification email to MZS
    const dispatchEmailPromise = resend.emails.send({
      from: DEFAULT_FROM,
      to: [DISPATCH_EMAIL],
      reply_to: passengerEmail || undefined,
      subject: `🚨 New Reservation #${bookingCode}: ${passengerName} - ${vehicleName}`,
      html: dispatchHtml,
    });

    const dispatchResult = await dispatchEmailPromise;

    // Attempt passenger confirmation email (succeeds if domain verified, or gracefully caught in sandbox)
    let passengerSent = false;
    if (passengerEmail && passengerEmail !== DISPATCH_EMAIL) {
      try {
        const passengerHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>MZS Chauffeur Reservation Confirmation</title>
</head>
<body style="margin:0;padding:24px;background-color:#0B0E14;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#E5E7EB;">
  <div style="max-width:620px;margin:0 auto;background:#111622;border:1px solid #1F2937;border-radius:16px;overflow:hidden;">
    <div style="height:4px;background:linear-gradient(90deg, #D4AF37 0%, #F5E6AB 50%, #B8972E 100%);"></div>
    <div style="padding:28px 32px;background:#0F1319;border-bottom:1px solid #1F2937;text-align:center;">
      <h1 style="margin:0;font-size:22px;letter-spacing:1px;font-weight:700;color:#FFFFFF;">
        MZS <span style="color:#D4AF37;font-weight:300;">EXECUTIVE CHAUFFEURS</span>
      </h1>
      <p style="margin:8px 0 0 0;font-size:14px;color:#CBD5E1;">Your Reservation is Confirmed</p>
      <div style="margin-top:14px;display:inline-block;padding:6px 14px;border-radius:999px;background:rgba(212,175,55,0.15);border:1px solid rgba(212,175,55,0.3);color:#F5E6AB;font-size:13px;font-family:monospace;font-weight:bold;">
        Confirmation #${bookingCode}
      </div>
    </div>
    <div style="padding:28px 32px;font-size:14px;line-height:1.6;">
      <p style="margin-top:0;">Dear ${passengerName || 'Valued Guest'},</p>
      <p>Thank you for choosing MZS Executive Chauffeurs. Your private chauffeur reservation has been received by our dispatch desk.</p>
      <div style="background:#171E2D;border:1px solid #28354D;border-radius:12px;padding:20px;margin:20px 0;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr>
            <td style="padding:6px 0;color:#9CA3AF;width:130px;">Fleet Class:</td>
            <td style="padding:6px 0;color:#FFFFFF;font-weight:bold;">${vehicleName}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#9CA3AF;">Pickup Schedule:</td>
            <td style="padding:6px 0;color:#FFFFFF;font-weight:bold;">${pickupDate} at ${pickupTime}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#9CA3AF;vertical-align:top;">Pickup:</td>
            <td style="padding:6px 0;color:#FFFFFF;">${pickupLocation}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#9CA3AF;vertical-align:top;">Drop-off:</td>
            <td style="padding:6px 0;color:#FFFFFF;">${dropoffLocation}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#9CA3AF;">All-Inclusive Rate:</td>
            <td style="padding:6px 0;color:#D4AF37;font-weight:bold;">${fareFormatted}</td>
          </tr>
        </table>
      </div>
      <p style="color:#9CA3AF;font-size:13px;">Our concierge desk will send your assigned chauffeur details, vehicle license plate, and live tracking link prior to pickup.</p>
    </div>
    <div style="padding:20px 32px;background:#0A0D13;border-top:1px solid #1F2937;font-size:11px;color:#6B7280;text-align:center;">
      <p style="margin:0;">MZS Executive Chauffeurs &bull; 24/7 Concierge: (888) 801-7476 &bull; info@mzexecutivechauffeurs.com</p>
    </div>
  </div>
</body>
</html>
        `.trim();

        const passRes = await resend.emails.send({
          from: DEFAULT_FROM,
          to: [passengerEmail],
          subject: `Your MZS Reservation Confirmation #${bookingCode}`,
          html: passengerHtml,
        });
        passengerSent = !!passRes?.data?.id;
      } catch (passErr) {
        console.warn('Note: Passenger confirmation email requires verified sender domain in Resend:', passErr.message);
      }
    }

    return res.status(200).json({
      success: true,
      bookingCode,
      dispatchEmailId: dispatchResult?.data?.id || null,
      passengerSent,
    });
  } catch (error) {
    console.error('MZS Booking API error:', error);
    return res.status(500).json({
      error: 'Failed to process booking email',
      message: error?.message || 'Internal Server Error',
    });
  }
}
