import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(
  email: string,
  verificationUrl: string,
) {
  const { data, error } = await resend.emails.send({
    from:
      process.env.EMAIL_FROM ??
      "MakeMyWeb <makemyweb2026@gmail.com>",
    to: email,
    subject: "Verify your MakeMyWeb account",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="color: #0f172a;">Welcome to MakeMyWeb 👋</h1>

        <p style="color: #475569; font-size: 16px; line-height: 1.6;">
          Thanks for creating your account.
          Please verify your email address to continue.
        </p>

        <a
          href="${verificationUrl}"
          style="
            display: inline-block;
            margin-top: 20px;
            padding: 14px 24px;
            background: #2563eb;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
          "
        >
          Verify Email
        </a>

        <p style="margin-top: 30px; color: #64748b; font-size: 14px;">
          This verification link will expire in 30 minutes.
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend email error:", error);
    throw new Error("Failed to send verification email");
  }

  return data;
}
