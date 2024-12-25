import React, { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.style.backgroundColor = "#121212";
      htmlElement.style.color = "#f4f4f4";
    } else {
      htmlElement.style.backgroundColor = "#f4f4f4";
      htmlElement.style.color = "#333";
    }
    htmlElement.style.overflow = "hidden";
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: isDarkMode ? "#121212" : "#f4f4f4",
        color: isDarkMode ? "#f4f4f4" : "#333",
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: isDarkMode ? "#1e1e1e" : "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          maxWidth: "600px",
          width: "90%",
        }}
      >
        <button
          onClick={toggleTheme}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            background: isDarkMode ? "#f4f4f4" : "#333",
            color: isDarkMode ? "#333" : "#f4f4f4",
          }}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <img
          src={isDarkMode ? "/images/logo-light.png" : "/images/logo-dark.png"}
          alt="Logo do CLI-Feed"
          style={{ width: "300px" }}
        />
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "20px",
          }}
        >
          Este projeto ainda está em construção. Em breve, você poderá acessar
          um feed de notícias tanto pelo terminal quanto pela web!
        </p>
        <img
          src="/images/profile.jpeg"
          alt="Jean - Responsável pelo projeto"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
            marginTop: "20px",
            marginBottom: "10px",
          }}
        />
        <p
          style={{
            fontSize: "1rem",
          }}
        >
          Desenvolvido por Jean Garcia
        </p>
      </div>
    </div>
  );
}
