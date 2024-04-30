import React, { useState } from "react";

const Header = () => {
 const [task, setTask] = useState("");

 const handleInputChange = (e) => {
    setTask(e.target.value);
 };

 const handleAddClick = () => {
    console.log("Add task:", task);
    // Implement functionality to add the task
 };

 return (
    <div className="App">
      <div className="container">
        <h1>To Do </h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add task to do"
            value={task}
            onChange={handleInputChange}
          />
          <div className="add_btn" onClick={handleAddClick}>ADD</div>
        </div>
      </div>
    </div>
 );
};

export default Header;

