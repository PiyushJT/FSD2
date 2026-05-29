// write a react component for todo list 1. add one input filed and a button by clicking on button display enter task on the page  2. also add a delete button with each added task to delete the task .
// todo list with add and delete functionality
import { useState } from 'react'
function US8() {
   
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
export default US8;