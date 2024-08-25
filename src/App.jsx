import React, { useState } from "react";
import Card from "./components/card/Card.jsx";
import FormField from "./components/formfield/FormField.jsx";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Email and password fields are required");
    } else {
      setMessage("Successfully logged in");
    }
  };

  return (
    <Card>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Email:"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormField
          label="Password:"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {message && <p>{message}</p>}
      </form>
    </Card>
  );
}

export default LoginForm;
