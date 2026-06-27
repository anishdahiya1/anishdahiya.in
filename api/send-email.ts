import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '15mb', // Increase to allow larger PDFs
    },
  },
};

export default async function handler(req: any, res: any) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, x-gmail-user, x-gmail-pass'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { hrName, hrEmail, resumeBase64, resumeFilename } = req.body;
  
  // Read Gmail SMTP credentials from headers
  const gmailUser = req.headers['x-gmail-user'] || process.env.GMAIL_USER;
  const gmailPass = req.headers['x-gmail-pass'] || process.env.GMAIL_PASS;

  if (!gmailUser || !gmailPass) {
    return res.status(400).json({ 
      error: 'Gmail credentials are required. Please configure them in the Portal settings drawer.' 
    });
  }

  // Remove spaces from Gmail App Password (Gmail expects 16 contiguous characters)
  const cleanGmailPass = gmailPass.replace(/\s+/g, '');

  try {
    // Setup Gmail SMTP Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: cleanGmailPass,
      },
    });

    const mailOptions = {
      from: `Anish Dahiya <${gmailUser}>`,
      to: hrEmail,
      subject: `Application for AIML / Python Developer Role - Anish Dahiya`,
      text: `Hi ${hrName},

Myself Anish and am actively looking jobs in pune and can join within 30 days itself and have relevant experience of 1.5 yrs in Aiml and python development itself and am genuinely interested in this job opportunity and joining the company am sharing the resume with you please let me know if its possible…

hoping to hear from you ..

Thank you`,
      attachments: resumeBase64
        ? [
            {
              filename: resumeFilename || 'Anish_Dahiya_Resume.pdf',
              content: resumeBase64,
              encoding: 'base64', // Specify base64 encoding for attachment
            },
          ]
        : [],
    };

    // Send email via Gmail SMTP
    const info = await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || 'SMTP Server error' });
  }
}
