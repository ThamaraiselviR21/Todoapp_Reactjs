import  { useState } from 'react';

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');


  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
    else{
        alert("enter any task")
    }
  };

 
  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">To-Do List</h1>
      <div className="d-flex mt-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add 
        </button>
      </div>
      <ul className="list-group mt-3">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                className="form-check-input me-2"style={{ backgroundColor: 'black', color: 'white'}}
                checked={task.completed}
                onChange={() => toggleTask(index)}
              />
              <span
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                }}
              >
                {task.text}
              </span>
            </div>
            {task.completed && (
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
