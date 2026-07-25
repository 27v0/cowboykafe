import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Cowboy Kafe — Bağlantılar",
  description: "Cowboy Kafe hızlı bağlantılar",
};

const PHONE_DISPLAY = "0545 952 07 55";
const PHONE_TEL = "+905459520755";
const WHATSAPP_URL = "https://wa.me/905459520755";
const GOOGLE_REVIEW_URL = "https://g.page/r/CZGidW7sxi2JEBM/review";
const INSTAGRAM_URL = "https://www.instagram.com/cowboykafe";
const LOCATION_URL = "https://maps.app.goo.gl/DpfySvW17k9SNbBM8";

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
      <Image
        src="/logo.png"
        alt="Cowboy Kafe"
        width={96}
        height={96}
        style={{ width: "96px", height: "96px", marginBottom: "0.5rem" }}
        priority
      />

      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
        Cowboy Kafe
      </h1>

      <Link href="/reservation" style={{ ...linkStyle, background: "#ffffff", color: "#000000" }}>
        Rezervasyon Yap
      </Link>

      <a href={`tel:${PHONE_TEL}`} style={linkStyle}>
        Bizi Arayın — {PHONE_DISPLAY}
      </a>

      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>
        WhatsApp'tan Yazın
      </a>

      <a href={LOCATION_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>
        Konum
      </a>

      <a
        href={GOOGLE_REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        Google'da Değerlendirin
      </a>

      <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>
        Instagram
      </a>
    </main>
  );
}
