// Write a program to build React app for task todo list.
// •	Add 1 input field and button and by clicking on button display entered task
// on the same page.
// •	Also, add delete button with each added task to delete the task
// write a react component for todo list 1. add one input filed and a button by clicking on button display enter task on the page  2. also add a delete button with each added task to delete the task .
// todo list with add and delete functionality
import { useState } from 'react'
function Pb359() {
   
    const[Task, setTask]= useState("");
    const[Todolist, setTodo]=useState([]);
    function handleChange(event) {
        setTask(event.target.value);
    }

    function addTask(event) {
        setTodo([...Todolist,{id: Date.now(), text: Task}]);
    };

    function deleteTask(id){          
        setTodo(
            Todolist.filter((task)=>task.id !== id)
        )
    }
    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" onChange={handleChange} />
            <button onClick={addTask}>Add Task</button>
            <div>
                {Todolist.map((task, index) => (
                    <div key={index}>
                        {task.text} <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )                                    

   
}
export default Pb359;