import React from "react";
import { useSelector } from "react-redux"; // Assuming user data is in Redux store
import task_icon from "../../assets/task_icon.png";
import List from "../../assets/list.png";
import Board from "../../assets/Group 1171276211.png";
import logout from "../../assets/logout_icon.png";
import defaultImg from "../../assets/Ellipse 326.png"
// import Due from "../../assets/Polygon 3.png"
// import Dueto from "../../assets/Polygon 2.png"
import sort from "../../assets/Sort.png";
import TodoList from "../Todolist/Todolist";
import "./Dashboard.css";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user); // Fetch user data from Redux store

  return (
    <div >
        <nav className="navbar">
            {/* left nav bar */}
            <div className="left-nav">
                <div className="Dashbord-logo">
                  <img src={task_icon} alt="Task Icon" className="task_icon" />
                  <span className="taskbuddy-text">TaskBuddy</span>
                </div>
               
            </div>
            {/* right nav bar */}
            <div className="right-nav">
                <div className="user-profile">
                   <img src={user?.photoURL || defaultImg} alt=" Avatar" className="user_avatar" />
                   <span className="username">{user?.name || "Avatar"}</span>

                 </div>
                
            </div>
            
        </nav>
        <div className="sub-nav">
            <div className="left-subnav">
                 <div >
                  <ul className="listBoard">
                    <li>             
                    <img src={List} alt="list"  />
                    List 
                    <div></div>
                    </li>
                    <li>             
                    <img src={Board} alt="list"  />
                    Board 
                    </li>
                    
                  </ul>
                </div> 
               
            </div>
            {/* right nav bar */}
            <div className="right-subnav">
                <div className="logout">
                    <button className="logout-btn">
                       <img src={logout} alt="list" className="logout-img"   />
                       <div className="logout-text"> Logout</div>
                    </button>
                </div>
                
            </div>

        </div>
        <div class="task-header">
            <div class="filters">
               <label for="category">Filter by:</label>
               <select id="category">
                    <option>Category</option>
               </select>
               <select id="due-date">
               <option>Due Date</option>
               </select>
            </div>
            <div class="search-add">
               <input type="text" class="search" placeholder="🔍 Search"/>
               <button class="add-task">ADD TASK</button>
            </div>
        </div>
        <div className="task-table-header">
            <span className="task-name">Task name</span>
            <span className="due-date">Due on <img src={sort} alt="Due-icon" />
            </span>
            <span className="task-status">Task Status</span>
            <span className="task-category">Task Category</span>
        </div>
        <TodoList/>


    </div>
  );
};

export default Dashboard;
