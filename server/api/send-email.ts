import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  const { EMAIL_USER, APP_PASSWORD, EMAIL_RECIPIENT } = useRuntimeConfig(event);

  if (event._method !== 'POST') {
    throw createError({
      statusCode: 405,
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: EMAIL_USER,
      pass: APP_PASSWORD,
    },
  });

  const body = await readBody(event);

  const { firstname, lastname, email, message } = body;

  const mailOptions = {
    from: email,
    to: EMAIL_RECIPIENT,
    subject: `Contact via portfolio de ${firstname} ${lastname}`,
    text: `${email}\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    setResponseStatus(event, 201);
    return {};
  } catch {
    throw createError({
      statusCode: 500,
    });
  }
});
