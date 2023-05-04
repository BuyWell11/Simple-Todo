import {useState} from "react";

export default function TodoAdder({AddTodo}){
    const [text, setText] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        AddTodo(text);
        setText('');
      }
    
      return (
        <div>
          <form onSubmit={onSubmitHandler}>
            <input
              type="text"
              placeholder="Enter new todo"
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <button type="submit" title="submit">submit</button>
          </form>
        </div>
      );
}