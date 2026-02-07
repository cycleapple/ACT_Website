export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#FAF8F5",
          color: "#2D3436",
          fontFamily: "system-ui, sans-serif",
          gap: "1rem",
        }}
      >
        <h1 style={{ fontSize: "2rem", color: "#1B2A4A" }}>
          Page Not Found
        </h1>
        <p>The page you are looking for does not exist.</p>
        <a
          href="/en/"
          style={{ color: "#C9A96E", textDecoration: "underline" }}
        >
          Return Home
        </a>
      </body>
    </html>
  );
}
