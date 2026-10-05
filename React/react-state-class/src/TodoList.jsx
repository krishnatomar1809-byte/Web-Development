import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    const [todos, setTodos] = useState([
        {
            task: "sample-task",
            id: uuidv4(),
            isDone:false
        }
    ]);

    const [newTodo, setNewTodo] = useState("");

    // Add new task
    const addNewTask = () => {
        if (newTodo.trim() === "") return;

        setTodos((prevTodos) => {
            return [
                ...prevTodos,
                {
                    task: newTodo,
                    id: uuidv4(),
                    isDone:false
                }
            ];
        });

        setNewTodo("");
    };

    // Input value update
    const updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    // Delete task
    const deleteTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.filter((todo) => todo.id !== id)
        );
    };

    // Uppercase one task
    const markAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: true,
                    };
                }

                return todo;
            })
        );
    };

    // Uppercase all tasks
    const markAllDone = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => ({
                ...todo,
                isDone:true,
            }))
        );
    };

    return (
        <div>
            <input
                placeholder="Add a task"
                value={newTodo}
                onChange={updateTodoValue}
            />

            <button onClick={addNewTask}>
                Add Task
            </button>

            <hr />

            <h2>Tasks Todo</h2>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? {textDecorationLine: "line-through"}:{}} >{todo.task}</span>
                        
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>
                            delete
                        </button>

                        <button onClick={() => markAsDone(todo.id)}>
                            Mark As Done
                        </button>
                    </li>
                ))}
            </ul>

            <button onClick={markAllDone}>
                Mark All Done
            </button>
        </div>
    );
}