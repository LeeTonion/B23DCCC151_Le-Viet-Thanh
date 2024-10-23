import React, { useState } from 'react';
import './App.css'; // Đảm bảo import tệp CSS của bạn

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [completedTaskIndex, setCompletedTaskIndex] = useState(null);

  const addTask = () => {
    if (taskName && dueDate) {
      const newTask = { name: taskName, date: new Date(dueDate) };
      setTasks([...tasks, newTask]);
      setTaskName('');
      setDueDate('');
    } else {
      alert('Vui lòng nhập tên công việc và ngày hết hạn.');
    }
  };

  const markAsCompleted = (index) => {
    setCompletedTaskIndex(index); 
    setTimeout(() => {
      setTasks(tasks.filter((_, i) => i !== index)); 
    }, 2000);
  };

  const getDateColor = (taskDate) => {
    const today = new Date();
    const taskDay = new Date(taskDate);
    const diffInDays = (taskDay - today) / (1000 * 60 * 60 * 24);

    if (diffInDays < 0) return 'red'; 
    if (diffInDays < 1) return 'orange';
    if (diffInDays < 2) return 'yellow';
    if (diffInDays < 7) return 'blue'; 
    return 'green'; 
  };

  return (
    <div>
      <h1>My work 🎯</h1>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <div className="task-info">
              <input
                type="radio"
                name="completedTask"
                checked={completedTaskIndex === index}
                onChange={() => markAsCompleted(index)}
              />
              <div>
                <span className={completedTaskIndex === index ? 'completed' : ''}>{task.name}</span>
                <span
                  style={{ color: getDateColor(task.date), marginLeft: '10px', fontSize: '0.85em' }}
                >
                  <br />
                  {task.date.toDateString()}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="input-container">
        <input
          type="text"
          placeholder="Nhập tên công việc"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button onClick={addTask}>Add task</button>
      </div>
    </div>
  );
}

export default ToDoList;
