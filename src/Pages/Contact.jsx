import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ContactFormInline() {
  const bgUrl =
    "https://bensdemoblog.com/wp-content/uploads/2024/10/69fb95ddthumbnail-760x400.jpeg";

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundImage: `url('${bgUrl}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "24px",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.3)",
      backdropFilter: "blur(6px)",
      zIndex: 0,
    },
    card: {
      position: "relative",
      zIndex: 1,
      width: "min(1000px, 92vw)",
      background: "rgba(255,255,255,0.92)",
      borderRadius: "14px",
      boxShadow: "0 14px 40px rgba(0,0,0,0.18)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "24px",
      padding: "28px",
    },
    titleWrap: { gridColumn: "1 / -1", paddingBottom: "8px" },
    title: {
      margin: 0,
      fontSize: "28px",
      fontWeight: 700,
      color: "#2b2b2b",
      letterSpacing: "0.3px",
    },
    group: { marginBottom: "14px" },
    label: {
      display: "block",
      fontSize: "12px",
      color: "#6b7280",
      marginBottom: "6px",
    },
    input: {
      width: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      padding: "10px 2px",
      borderBottom: "2px solid #e5e7eb",
      fontSize: "14px",
    },
    inputFocus: { borderBottom: "2px solid #ef4444" },
    textarea: {
      width: "100%",
      minHeight: "180px",
      resize: "vertical",
      border: "2px solid #e5e7eb",
      outline: "none",
      padding: "12px",
      fontSize: "14px",
      background: "transparent",
      borderRadius: "8px",
    },
    btnRow: { gridColumn: "1 / -1", display: "flex", justifyContent: "flex-end" },
    btn: {
      appearance: "none",
      border: "none",
      outline: "none",
      background: "#ef4444",
      color: "#fff",
      padding: "12px 22px",
      borderRadius: "10px",
      fontSize: "14px",
      cursor: "pointer",
      boxShadow: "0 6px 18px rgba(239,68,68,0.4)",
    },
    wrap: {
      width: "100%",
    },
  };

  const [focusId, setFocusId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const inFocus = (id) =>
    focusId === id ? { ...styles.input, ...styles.inputFocus } : styles.input;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    alert("Data submitted successfully!");
  };

  return (
    <>
      <Navbar />
      <div style={styles.page}>
        <div style={styles.overlay}></div>
        <div style={styles.card}>
          <div style={styles.titleWrap}>
            <h2 style={styles.title}>Contact Us</h2>
          </div>

          <div style={styles.wrap}>
            <div style={styles.group}>
              <label style={styles.label}>Name</label>
              <input
                type="text"
                name="name"
                placeholder="enter your name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusId("name")}
                onBlur={() => setFocusId("")}
                style={inFocus("name")}
              />
            </div>

            <div style={styles.group}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                placeholder="enter your email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusId("email")}
                onBlur={() => setFocusId("")}
                style={inFocus("email")}
              />
            </div>

            <div style={styles.group}>
              <label style={styles.label}>Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="enter phone number"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusId("phone")}
                onBlur={() => setFocusId("")}
                style={inFocus("phone")}
              />
            </div>
          </div>

          <div style={styles.wrap}>
            <div style={styles.group}>
              <label style={styles.label}>Message</label>
              <textarea
                name="message"
                placeholder="Write text here..."
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusId("msg")}
                onBlur={() => setFocusId("")}
                style={
                  focusId === "msg"
                    ? { ...styles.textarea, borderColor: "#ef4444" }
                    : styles.textarea
                }
              />
            </div>
          </div>

          <div style={styles.btnRow}>
            <button type="button" style={styles.btn} onClick={handleSubmit}>
              SUBMIT
            </button>
          </div>
        </div>

        <style>{`
          @media (max-width: 820px) {
            div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
}
