"use client";
import { useState } from "react";

export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yes, setYes] = useState(false);

  const messages = [
    "Are you sure, my love? 🥺",
    "Think again handsome 😌",
    "Don’t break my heart 💔",
    "I’ll wait forever for you...",
    "You know you want to say yes ❤️"
  ];

  if (yes) {
    return (
      <main style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>
            You said YES ❤️
          </h1>
          <p style={styles.text}>
            You are my favorite person,  
            my safe place,  
            and the best thing that ever happened to me.
          </p>
          <p style={styles.text}>
            Happy Valentine’s Day, my love 💌
          </p>
        </div>
      </main>
    );
  }

  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>
          Will you be my Valentine? 💌
        </h1>
        <p style={styles.text}>
          You make my world softer, brighter, and warmer.
        </p>

        <div style={styles.buttons}>
          <button
            onClick={() => setYes(true)}
            style={{
              ...styles.yesButton,
              transform: `scale(${1 + noCount * 0.15})`
            }}
          >
            Yes, always ❤️
          </button>

          <button
            onClick={() => setNoCount(noCount + 1)}
            style={{
              ...styles.noButton,
              transform: `scale(${1 - noCount * 0.1})`
            }}
          >
            {messages[Math.min(noCount, messages.length - 1)]}
          </button>
        </div>
      </div>
    </main>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom right, #fff1f2, #ffe4e6)",
    fontFamily: "Georgia, serif",
    textAlign: "center",
  },
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
    maxWidth: "500px"
  },
  title: {
    fontSize: "32px",
    color: "#b91c1c",
    marginBottom: "20px"
  },
  text: {
    fontSize: "18px",
    color: "#444",
    marginBottom: "20px"
  },
  buttons: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  yesButton: {
    padding: "12px 25px",
    background: "#dc2626",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontSize: "18px",
    cursor: "pointer",
    transition: "0.3s"
  },
  noButton: {
    padding: "12px 25px",
    background: "#9ca3af",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s"
  }
};
