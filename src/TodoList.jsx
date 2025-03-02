import React, { useState } from "react";
import "./App.css";

function TodoList() {
  const [tasks, setTasks] = useState({
    big: [],
    medium: [],
    small: [],
  });

  const [newTask, setNewTask] = useState({
    big: "",
    medium: "",
    small: "",
  });

  // Handle input change for new tasks
  const handleInputChange = (type, value) => {
    setNewTask((prev) => ({ ...prev, [type]: value }));
  };

  // Add a new task
  const addTask = (type) => {
    if (newTask[type].trim() === "") return; // Prevent adding empty tasks

    setTasks((prev) => ({
      ...prev,
      [type]: [...prev[type], { text: newTask[type], completed: false }],
    }));

    setNewTask((prev) => ({ ...prev, [type]: "" })); // Clear input field
  };

  // Toggle task completion
  const toggleComplete = (type, index) => {
    setTasks((prev) => ({
      ...prev,
      [type]: prev[type].map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  // Delete a task
  const deleteTask = (type, index) => {
    setTasks((prev) => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index),
    }));
  };

  // Edit a task
  const editTask = (type, index, value) => {
    setTasks((prev) => ({
      ...prev,
      [type]: prev[type].map((task, i) =>
        i === index ? { ...task, text: value } : task
      ),
    }));
  };

  return (
    <div className="container">
      <h1 className="title">1-3-5 To-Do List 🎯</h1>

      {Object.entries({ big: "1 Big Task", medium: "3 Medium Tasks", small: "5 Small Tasks" }).map(([key, title]) => (
        <div key={key} className="task-group">
          <h2 className="task-title">{title}</h2>

          <div className="task-input-container">
            <input
              type="text"
              className="task-input"
              placeholder={`Add ${title.split(" ")[1]} Task...`}
              value={newTask[key]}
              onChange={(e) => handleInputChange(key, e.target.value)}
            />
            <button className="btn add" onClick={() => addTask(key)}>Add</button>
          </div>

          {tasks[key].map((task, index) => (
            <div key={index} className="task-item">
              <input
                type="text"
                className={`task-text ${task.completed ? "completed" : ""}`}
                value={task.text}
                onChange={(e) => editTask(key, index, e.target.value)}
              />
              <button className="btn complete" onClick={() => toggleComplete(key, index)}>
                {task.completed ? "Task Done" : "✔"}
              </button>
              <button className="btn delete" onClick={() => deleteTask(key, index)}>Delete</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
