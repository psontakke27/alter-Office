import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, editTask, deleteTask } from "../../redux/taskSlice";
import "./TodoList.css";
import ArrowUp from "../../assets/chevron-down.png";
import ArrowDown from "../../assets/Mask.png";

const TodoList = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [category, setCategory] = useState("Work");
  const [status, setStatus] = useState("TO-DO");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showOptions, setShowOptions] = useState(null);

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const toggleTaskList = () => setIsAdding(!isAdding);

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch(addTask({ title: newTask, date: "Today", category, status }));
      setNewTask("");
      setIsAdding(false);
    }
  };

  return (
    <div className="todo-container">
      {/* Header - Clicking Toggles Task List */}
      <div className="todo-header" onClick={toggleTaskList}>
        <span>Todo ({tasks.length})</span>
        <span className="arrow">
          <img src={isAdding ? ArrowUp : ArrowDown} alt="toggleArrow" />
        </span>
      </div>

      {/* ADD TASK Button - Always Visible */}
      <div className="add-task-bar">
        <span onClick={() => setIsAdding(true)}>+ ADD TASK</span>
      </div>

      {/* Conditional Task Input Section */}
      {isAdding && (
        <div className="add-task">
          <input
            type="text"
            placeholder="Task Title"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />

          {/* Status Dropdown */}
          <div className="dropdown">
            <button onClick={() => setShowStatusDropdown(!showStatusDropdown)}>+</button>
            {showStatusDropdown && (
              <div className="dropdown-menu">
                <p onClick={() => setStatus("TO-DO")}>TO-DO</p>
                <p onClick={() => setStatus("IN-PROGRESS")}>IN-PROGRESS</p>
                <p onClick={() => setStatus("COMPLETED")}>COMPLETED</p>
              </div>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="dropdown">
            <button onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}>+</button>
            {showCategoryDropdown && (
              <div className="dropdown-menu">
                <p onClick={() => setCategory("Work")}>WORK</p>
                <p onClick={() => setCategory("Personal")}>PERSONAL</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <button className="add-btn" onClick={handleAddTask}>ADD</button>
          <button className="cancel-btn" onClick={() => setIsAdding(false)}>CANCEL</button>
        </div>
      )}

      {/* Task List - Visible Based on isAdding */}
      {isAdding && (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <input type="checkbox" />
              <span>{task.title}</span>
              <span>{task.date}</span>
              <span className={`status ${task.status.toLowerCase()}`}>{task.status}</span>
              <span className="category">{task.category}</span>

              {/* Three-dot menu */}
              <div className="menu">
                <span onClick={() => setShowOptions(showOptions === index ? null : index)}>⋮</span>
                {showOptions === index && (
                  <div className="menu-options">
                    <p onClick={() => dispatch(editTask(task))}>✏ Edit</p>
                    <p onClick={() => dispatch(deleteTask(task))} className="delete">🗑 Delete</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;

// import React from "react";
// import { useSelector } from "react-redux";
// import TaskSection from "../TaskSection/TaskSection";
// import "./TodoList.css";

// const TodoList = () => {
//   const tasks = useSelector((state) => state.tasks.tasks);

//   // Group tasks by status
//   const groupedTasks = {
//     "TO-DO": tasks.filter((task) => task.status === "TO-DO"),
//     "IN-PROGRESS": tasks.filter((task) => task.status === "IN-PROGRESS"),
//     "COMPLETED": tasks.filter((task) => task.status === "COMPLETED"),
//   };

//   return (
//     <div className="todo-container">
//       {/* Render Sections for Each Status */}
//       {Object.entries(groupedTasks).map(([status, tasks]) => (
//         <TaskSection key={status} title={status} tasks={tasks} />
//       ))}
//     </div>
//   );
// };

// export default TodoList;
