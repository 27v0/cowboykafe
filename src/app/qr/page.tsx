import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Cowboy Kafe — Links",
  description: "Cowboy Kafe quick links",
};

const PHONE_DISPLAY = "0545 952 07 55";
const PHONE_TEL = "+905459520755";
const WHATSAPP_URL = "https://wa.me/905459520755";
const GOOGLE_REVIEW_URL = "https://g.page/r/CZGidW7sxi2JEBM/review";
const INSTAGRAM_URL = "https://www.instagram.com/cowboykafe";

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

export default function QrPage() {
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
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
        Cowboy Kafe
      </h1>

      <Link href="/reservation" style={{ ...linkStyle, background: "#ffffff", color: "#000000" }}>
        Make a Reservation
      </Link>

      <a href={`tel:${PHONE_TEL}`} style={linkStyle}>
        Call Us — {PHONE_DISPLAY}
      </a>

      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>
        WhatsApp Us
      </a>

      <a
        href={GOOGLE_REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        Leave a Google Review
      </a>

      <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>
        Instagram
      </a>
    </main>
  );
}
