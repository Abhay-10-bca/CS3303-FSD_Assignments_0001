import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!username) {
      newErrors.username = "Username is required";
    } else if (!usernameRegex.test(username)) {
      newErrors.username =
        "Username must be 3-15 characters and contain only letters, numbers or _";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must contain 8+ characters, uppercase, lowercase, number and special character";
    }

    setErrors(newErrors);

    // Valid form
    if (Object.keys(newErrors).length === 0) {
      setShowToast(true);

      // Automatically hide toast after 3 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  return (
    <div className="container">

      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>

        <label>Username</label>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {errors.username && (
          <p className="error">{errors.username}</p>
        )}

        <label>Password</label>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <button type="submit">
          Submit
        </button>

      </form>

      {/* Toast Message */}
      {showToast && (
        <div className="toast">
          ✓ Password submitted successfully
        </div>
      )}

    </div>
  );
}

export default App;