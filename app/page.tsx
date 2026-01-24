export default function Home() {
  return (
    <main style={{ 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column",
      justifyContent: "center", 
      alignItems: "center",
      background: "#0b0f1a",
      color: "white",
      fontFamily: "sans-serif",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        AIVORA
      </h1>

      <p style={{ fontSize: "1.2rem", maxWidth: "500px" }}>
        El empleado digital que atiende, agenda y responde por WhatsApp
        24/7 para tu negocio.
      </p>

      <button style={{
        marginTop: "2rem",
        padding: "12px 24px",
        fontSize: "1rem",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer"
      }}>
        Quiero Aivora
      </button>
    </main>
  );
}



