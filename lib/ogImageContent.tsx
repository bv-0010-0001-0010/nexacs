export function OgImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#0a0b0d",
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 30,
          letterSpacing: 6,
          color: "#e8871e",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        Nexa Construction Solutions
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 76,
          color: "#f7f6f3",
          fontWeight: 700,
          marginTop: 28,
          lineHeight: 1.05,
          maxWidth: 980,
          textTransform: "uppercase",
        }}
      >
        Building the people behind the project.
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 28,
          color: "#c7c9cc",
          marginTop: 32,
          maxWidth: 820,
        }}
      >
        Construction labour hire, skilled trades &amp; workforce solutions across NSW.
      </div>
    </div>
  );
}
