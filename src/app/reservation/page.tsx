import type { Metadata } from "next";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Cowboy Kafe — Reservations",
  description: "Reservations coming soon",
};

const PHONE_DISPLAY = "0545 952 07 55";
const PHONE_TEL = "+905459520755";
const WHATSAPP_URL = "https://wa.me/905459520755";

const linkStyle: CSSProperties = {
  display: "block",
  width: "100%",
  maxWidth: "360px",
  padding: "1rem 1.25rem",
  border: "1px solid #ffffff",
  borderRadius: "999px",
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "1.05rem",
  fontWeight: 600,
  textAlign: "center",
};

export default function ReservationPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        padding: "2rem 1.5rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem" }}>Coming soon</h1>
      <p style={{ marginBottom: "1.5rem", opacity: 0.8 }}>
        Online reservations aren&apos;t open yet. Call or WhatsApp us to book a table.
      </p>

      <a href={`tel:${PHONE_TEL}`} style={linkStyle}>
        Call Us — {PHONE_DISPLAY}
      </a>

      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>
        WhatsApp Us
      </a>
    </main>
  );
}
