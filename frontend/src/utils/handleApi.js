import axios from "axios";

const baseUrl = "http://localhost:5000";

const getAllToDo = (setTodo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data.....", data);
    setTodo(data);
  });
};

const addTodo = (text , setText , setTodo) =>{
    axios.post(`${baseUrl}/save`, {text}).then((data) =>{
      console.log(data);
      setText("")
      getAllToDo(setTodo)
    })
    .catch((error) => { 
      console.log(error)
    })
}

const updateTodo = (todoId , text, setTodo, setText, setIsUpdating) =>{
  axios.post(`${baseUrl}/update`, {_id : todoId , text}).then((data) =>{
    setText("")
    setIsUpdating(false)
    getAllToDo(setTodo)
  })
  .catch((error) => { 
    console.log(error)
  })
}

const deleteToDo = (_id , setTodo) =>{
  axios.post(`${baseUrl}/delete`, {_id }).then((data) =>{
    console.log(data)
    getAllToDo(setTodo)
  })
  .catch((error) => { 
    console.log(error)
  })
}

export {getAllToDo , addTodo , updateTodo , deleteToDo}