import { useState } from 'react';
import TodoAdder from './components/TodoAdder/TodoAdder';
import TodoList from './components/TodoList/TodoList';

export default function App(){
    const [todoList, setTodoList] = useState([]);

    const handleDeleteTodo = (id) => {
        console.log(id)
        setTodoList(todoList.filter(todo => todo.id !== id));
    }

    const handleAddTodo = (text) =>{
        let newTodo = {
            id: Date.now(),
            text: text
        }
        setTodoList([...todoList, newTodo])
    }
    return(
        <div>
            <TodoAdder AddTodo={handleAddTodo}/>
            <TodoList todoList={todoList} handleDeleteTodo={handleDeleteTodo}/>
        </div>
    )
}

