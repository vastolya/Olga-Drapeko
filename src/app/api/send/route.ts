import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react'
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, phone } = await req.json();
  try {
    const data = await resend.emails.send({
      from: `Ольга Драпеко <email@olgadrapeko.ru>`,
      to: `izraolya@mail.ru`,
      subject: 'Someone just left their contact for a callback',
      text: '',
      react: EmailTemplate({ name, phone }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}