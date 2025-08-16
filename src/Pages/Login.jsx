import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LoginForm() {
  const bgUrl =
    "https://thumbs.dreamstime.com/b/cooking-mexican-taco-meat-beans-vegetables-cooking-mexican-taco-meat-beans-vegetables-black-slate-table-latin-97685629.jpg"; 

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundImage: `url('${bgUrl}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.5)",
      filter: "blur(6px) brightness(0.9)",
      zIndex: 0,
    },
    card: {
      position: "relative",
      zIndex: 1,
      width: "min(380px, 92vw)",
      background: "rgba(255,255,255,0.95)",
      padding: "28px",
      borderRadius: "14px",
      boxShadow: "0 14px 40px rgba(0,0,0,0.18)",
      textAlign: "center",
      animation: "fadeIn 0.6s ease-in-out",
    },
    title: {
      fontSize: "26px",
      fontWeight: 700,
      color: "#222",
      marginBottom: "20px",
    },
    group: { marginBottom: "18px", textAlign: "left" },
    label: {
      display: "block",
      fontSize: "13px",
      fontWeight: "500",
      color: "#444",
      marginBottom: "6px",
    },
    input: {
      width: "100%",
      padding: "10px 12px",
      fontSize: "14px",
      borderRadius: "8px",
      border: "2px solid #ddd",
      outline: "none",
      transition: "0.3s",
    },
    inputFocus: {
      borderColor: "#ef4444",
      boxShadow: "0 0 6px rgba(239,68,68,0.4)",
    },
    btn: {
      width: "100%",
      padding: "12px",
      background: "#ef4444",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
      boxShadow: "0 6px 18px rgba(239,68,68,0.4)",
      transition: "0.3s",
    },
    btnHover: {
      background: "#dc2626",
    },
  };

  const [focusId, setFocusId] = useState("");
  const [hoverBtn, setHoverBtn] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", loginData);
    alert("Login Successfully!");
  };

  return ( 
    <>
    <Navbar/>
    <div style={styles.page}>
      <div style={styles.overlay}></div>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Login</h2>

        <div style={styles.group}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={loginData.email}
            onChange={handleChange}
            onFocus={() => setFocusId("email")}
            onBlur={() => setFocusId("")}
            style={
              focusId === "email"
                ? { ...styles.input, ...styles.inputFocus }
                : styles.input
            }
            required
          />
        </div>

        <div style={styles.group}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={loginData.password}
            onChange={handleChange}
            onFocus={() => setFocusId("password")}
            onBlur={() => setFocusId("")}
            style={
              focusId === "password"
                ? { ...styles.input, ...styles.inputFocus }
                : styles.input
            }
            required
          />
        </div>

        <button
          type="submit"
          style={hoverBtn ? { ...styles.btn, ...styles.btnHover } : styles.btn}
          onMouseEnter={() => setHoverBtn(true)}
          onMouseLeave={() => setHoverBtn(false)}
        >
          Login
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
}
