import { useState } from 'react';


const TodoInsert = ({todo, setTodo}) => {
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
      }
    
      const handleUpload = () => {
        setTodo((preState) => {
          return([...preState,
            {
              id: todo.length+1,
              todo:input,
              done: false,
              edit: false,
        }
          ]);
        })
        setInput('');
      }
    
      const handleEnter = (e) => {
        if(e.keyCode === 13){
          setTodo((preState) => {
          return([...preState,
            {
              id: todo.length+1,
              todo:input,
              done: false,
              edit: false,
            }
          ]);
        })
        setInput('');
      }
      }

    return (
        <div>
            <input type="text" value={input} onChange={handleInputChange} onKeyDown={handleEnter}></input>
            <button onClick={handleUpload}>Add</button>
        </div>
    );
};

export default TodoInsert;