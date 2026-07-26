import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { name, email, reason, message } = req.body || {};

  if (!email || !message) {
    return res.status(400).json({ error: 'Email y mensaje requeridos' });
  }

  try {
    await resend.emails.send({
      from: 'Portfolio GDV <onboarding@resend.dev>',
      to: 'dvega6442@gmail.com',
      subject: `[Portfolio] ${reason || 'Consulta'} — ${name || email}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #a84432;">Nueva consulta desde el portfolio</h2>
          <hr style="border: 1px solid #e5e2de;" />
          <p><strong>Nombre:</strong> ${name || 'No especificado'}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Motivo:</strong> ${reason || 'No especificado'}</p>
          <hr style="border: 1px solid #e5e2de;" />
          <p style="white-space: pre-wrap;">${message}</p>
          <hr style="border: 1px solid #e5e2de;" />
          <p style="color: #999; font-size: 12px;">Enviado desde el formulario de contacto del portfolio.</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('[Contact] Resend error:', error);
    return res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
}
