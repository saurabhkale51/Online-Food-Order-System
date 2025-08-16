import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function SignupForm() {
  const bgUrl =
    "https://thumbs.dreamstime.com/b/cooking-mexican-taco-meat-beans-vegetables-cooking-mexican-taco-meat-beans-vegetables-black-slate-table-latin-97685629.jpg";

  const styles = {
    page: {
      minHeight: "100vh",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      overflow: "hidden",
    },
    bgImage: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url('${bgUrl}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "blur(6px) brightness(0.9)",
      zIndex: 0,
    },
    card: {
      position: "relative",
      zIndex: 1,
      background: "rgba(255,255,255,0.9)",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      maxWidth: "400px",
      width: "100%",
      backdropFilter: "blur(4px)",
    },
    title: {
      textAlign: "center",
      fontSize: "28px",
      fontWeight: "700",
      marginBottom: "20px",
      color: "#222",
    },
    group: {
      marginBottom: "15px",
    },
    label: {
      fontSize: "13px",
      fontWeight: "600",
      marginBottom: "5px",
      display: "block",
      color: "#555",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      outline: "none",
      fontSize: "14px",
    },
    btn: {
      width: "100%",
      padding: "12px",
      border: "none",
      borderRadius: "8px",
      background: "#ef4444",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
      marginTop: "10px",
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Signup Data:", formData);
    alert("Signup Successfully");
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <>
      <Navbar />
      <div style={styles.page}>
        
        <div style={styles.bgImage}></div>

        
        <div style={styles.card}>
          <h2 style={styles.title}>Signup</h2>

          <div style={styles.group}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <button type="button" style={styles.btn} onClick={handleSubmit}>
            Signup
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

