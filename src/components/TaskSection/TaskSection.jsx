import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTaskStatus } from "../../redux/taskSlice";
import "./TaskSection.css";

const TaskSection = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const groupedTasks = {
    "To-Do": tasks.filter((task) => task.status === "TO-DO"),
    "In-Progress": tasks.filter((task) => task.status === "IN-PROGRESS"),
    Completed: tasks.filter((task) => task.status === "COMPLETED"),
  };

  const handleStatusChange = (id, newStatus) => {
    dispatch(updateTaskStatus({ id, status: newStatus }));
  };

  return (
    <div className="task-manager">
      {Object.entries(groupedTasks).map(([status, taskList]) => (
        <div key={status} className={`task-section ${status.toLowerCase()}`}>
          <h3>{status} ({taskList.length})</h3>
          <ul>
            {taskList.map((task) => (
              <li key={task.id} className="task-item">
                <span>{task.name}</span>
                <span>{task.dueDate}</span>
                <select value={task.status} onChange={(e) => handleStatusChange(task.id, e.target.value)}>
                  <option value="TO-DO">TO-DO</option>
                  <option value="IN-PROGRESS">IN-PROGRESS</option>
                  <option value="COMPLETED">COMPLETED</option>
                </select>
                <span>{task.category}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default  TaskSection;

