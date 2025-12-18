// import { hover } from "framer-motion";
import "./AuthForm.css";
import React, { useState, ChangeEvent, FC } from "react";
// import App from "../App";

interface AuthFormProps {
  isSignup: boolean;
  onSwitch: () => void;
  onSuccess: () => void;
}

const AuthForm: FC<AuthFormProps> = ({ isSignup, onSwitch, onSuccess }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    if (isSignup) {
      localStorage.setItem("user", JSON.stringify({ email, password }));
      alert("Signup successful! Please log in.");
      onSwitch();
    } else {
      const stored = localStorage.getItem("user");
      if (!stored) {
        alert("No account found. Please sign up first.");
        return;
      }
      const parsed = JSON.parse(stored);
      if (parsed?.email === email && parsed?.password === password) {
        localStorage.setItem("loggedIn", "true");
        onSuccess();
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <div style={styles.container} className="page-container">
      <div style={styles.card}>
        <h2 style={styles.title}>{isSignup ? "Create Account" : "Welcome Back"}</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSubmit} style={styles.button} className="buttonauth">
          {isSignup ? "Signup" : "Login"}
        </button>
        <p style={styles.text}>
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span onClick={onSwitch} style={styles.link}>
            {isSignup ? "Login" : "Signup"}
          </span>
        </p>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position:"relative",
    height: "100vh",
    background: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GITAM_Vizag_Campus.jpg/1280px-GITAM_Vizag_Campus.jpg)",
    backgroundRepeat:"no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "rgba(213, 236, 255, 0.6)",
    borderRadius: "16px",
    padding: "2rem",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "320px",
  },
  title: {
    marginBottom: "0.5rem",
    textAlign: "center",
    color: "#333",
  },
  input: {
    padding: "0.75rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    padding: "0.75rem",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1rem",
  },
  text: {
    textAlign: "center",
    fontSize: "0.9rem",
    fontWeight:"50px",
    color: "#333",
  },
  link: {
    color: "rgba(0,115,102,255)",
    cursor: "pointer",
    fontWeight: "bold",
    marginLeft: "10px",
    
  },
};

export default AuthForm;
