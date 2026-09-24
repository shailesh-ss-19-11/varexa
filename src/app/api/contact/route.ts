import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  service?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, phone, service, message } = payload;

  if (!name?.trim() || !email?.trim() || !company?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, company, and message are required." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Name: name,
        Email: email,
        Company: company,
        Phone: phone || "—",
        "Interested in": service || "—",
        Message: message,
        _subject: `New demo request from ${name} (${company})`,
        _replyto: email,
        _template: "table",
        _captcha: "false",
      }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      console.error("formsubmit.co rejected the request:", res.status, data);
      throw new Error("formsubmit.co request failed");
    }
  } catch (err) {
    console.error("Failed to submit contact form:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
