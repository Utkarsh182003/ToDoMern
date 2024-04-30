import React from 'react';
import { MdDelete , MdEditCalendar} from "react-icons/md";

const Todo = ({ text, updateMode, deleteToDo }) => {
 return (
    <div className='todo'>
      <div className='text'>{text}</div>
      <div className='icons'>
        <MdEditCalendar onClick={updateMode} />
        <MdDelete onClick={deleteToDo} />
      </div>
    </div>
 );
};

export default Todo;
