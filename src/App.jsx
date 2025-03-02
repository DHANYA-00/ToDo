import React, { useState } from "react";
import Signup from "./signup"; // Import Signup Component
import TodoList from "./TodoList"; // Import To-Do List Component
import "./App.css";

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false); // Set initial state to false

  console.log("isSignedUp:", isSignedUp); // Debugging: Check if state updates

  return (
    <div className="container">
      {isSignedUp ? (
        <TodoList /> // Show To-Do List if signed up
      ) : (
        <Signup onSignup={() => setIsSignedUp(true)} /> // Show Signup Page first
      )}
    </div>
  );
}

export default App;
