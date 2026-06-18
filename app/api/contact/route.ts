import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { Resend } from "resend";

// Email addresses (see memory: email-zero-cost-architecture)
const NOTIFY_TO = "kreasi.studio.web@gmail.com";
const FROM_NOTIFY = "Kreasi Studio Web <noreply@send.kreasi-studio.my.id>";
const FROM_REPLY = "Kreasi Studio <hello@send.kreasi-studio.my.id>";
const REPLY_TO_HUMAN = "info@kreasi-studio.my.id";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
  // Honeypot — real users never fill this hidden field.
  company_website?: string;
};

const SERVICE_LABELS: Record<string, string> = {
  web: "Web Development",
  mobile: "Mobile App Development",
  cloud: "Cloud & Infrastructure",
  ai: "AI/ML Solutions",
  other: "Lainnya",
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const esc = (v: string) =>
  v.replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] as string,
  );

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: pretend success so bots don't learn they were caught.
  if (body.company_website) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const service = body.service?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Nama, email, dan pesan wajib diisi." },
      { status: 422 },
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Format email tidak valid." },
      { status: 422 },
    );
  }
  if (message.length > 5000) {
    return NextResponse.json(
      { error: "Pesan terlalu panjang." },
      { status: 422 },
    );
  }

  const apiKey = (getCloudflareContext().env as { RESEND_API_KEY?: string })
    .RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Layanan email belum dikonfigurasi." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const serviceLabel = SERVICE_LABELS[service] ?? service ?? "-";

  // 1) Notification to the team — Reply-To = submitter so a Gmail reply reaches the lead.
  const notify = await resend.emails.send({
    from: FROM_NOTIFY,
    to: NOTIFY_TO,
    replyTo: email,
    subject: `Pesan baru dari ${name} — kreasi-studio.my.id`,
    html: `
      <h2>Pesan baru dari website</h2>
      <p><strong>Nama:</strong> ${esc(name)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      <p><strong>Perusahaan:</strong> ${esc(company) || "-"}</p>
      <p><strong>Layanan:</strong> ${esc(serviceLabel)}</p>
      <p><strong>Pesan:</strong></p>
      <p style="white-space:pre-wrap">${esc(message)}</p>
    `,
  });

  if (notify.error) {
    console.error("Resend notify error", notify.error);
    return NextResponse.json(
      { error: "Gagal mengirim pesan. Coba lagi nanti." },
      { status: 502 },
    );
  }

  // 2) Auto-reply to the submitter (best-effort — don't fail the request if this errors).
  try {
    await resend.emails.send({
      from: FROM_REPLY,
      to: email,
      replyTo: REPLY_TO_HUMAN,
      subject: "Terima kasih telah menghubungi Kreasi Studio",
      html: `
        <p>Halo ${esc(name)},</p>
        <p>Terima kasih, pesanmu sudah kami terima. Tim Kreasi Studio akan
        membalas dalam 1×24 jam.</p>
        <p>Salam,<br/>Tim Kreasi Studio</p>
      `,
    });
  } catch (e) {
    console.error("Resend auto-reply error", e);
  }

  return NextResponse.json({ ok: true });
}
