import React, { useState, useCallback } from 'react';
import './App.css';

// TaskList Component 
function TaskList({ tasks, onTaskAdded }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  );
}

function App() {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Go grocery shopping' },
    { id: 2, text: 'Do the laundry' },
  ]);

  // useCallback hook to avoid unnecessary re-renders when adding tasks
  const onTaskAdded = useCallback((newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }, []);

  return (
    <div className="App">
      <h1>Task List</h1>
      {/* Pass the list of tasks and the handler to the TaskList component */}
      <TaskList tasks={tasks} onTaskAdded={onTaskAdded} />
      {/* Button to add a new task */}
      <button onClick={() => onTaskAdded({ id: 3, text: 'Take out the trash' })}>
        Add Task
      </button>
    </div>
  );
}

export default App;

