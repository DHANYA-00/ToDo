import React, { useState } from "react";
import "./Signup.css";

function Signup({ onSignup }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Signed Up:", formData); // Debugging: Ensure form submits
    onSignup(); // Call function to update state in App.jsx
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Create an Account ✨</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="input-field"
        />
        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
