export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem" }}>Coming soon</h1>
      <a
        href="https://www.instagram.com/cowboykafe/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
    </main>
  );
}
