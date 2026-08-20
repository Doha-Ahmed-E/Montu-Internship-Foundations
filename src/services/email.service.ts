const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

export const sendVerificationEmail = async (email: string, code: string) => {
  try {
    const response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: {
          name: process.env.BREVO_SENDER_NAME,
          email: process.env.BREVO_SENDER_EMAIL,
        },
        to: [
          {
            email,
          },
        ],
        subject: "Email Verification Code",
        htmlContent: `
          <h2>Verify your email</h2>
          <p>Your verification code is:</p>
          <h1>${code}</h1>
          <p>This code will expire in 10 minutes.</p>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.text();

      console.error("[Brevo API Error]:", {
        status: response.status,
        error,
      });

      throw new Error("Failed to send verification email");
    }

    console.log(`Verification email sent to ${email}`);
  } catch (error) {
    console.error("Email service error:", error);
    throw error;
  }
};
