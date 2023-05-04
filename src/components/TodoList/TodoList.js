import Todo from '../Todo/Todo';

export default function TodoList({todoList, handleDeleteTodo}) {

    return (
        <div>
            {!todoList.length ? (<h2>Todo list is empty</h2>) :
            todoList.map(todo => <Todo key={todo.id} id={todo.id} text={todo.text} handelClick={handleDeleteTodo}/>)}  
        </div>
    )

}