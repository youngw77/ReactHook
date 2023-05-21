// import { useEffect, useState } from 'react';

// const heavyWork = () => {
//   console.log("무거운 작업");
//   return ['홍길동', '김민수'];
// }

// function App() {
//   const[names, setNames] = useState( () => {
//     return heavyWork();
//   });
//   const[input, setInput] = useState('');

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//     console.log(e.target.value);
//   };
//   const handleUpload =()=>{
//     setNames((prevState) => {
//       console.log('이전 state: ', prevState);
//       return([input, ...prevState]);
//     });
//   };
//   function name() {
//     console.log("start")
//   }
//   useEffect(()=>{
//     name()
//   },[])

//   return (
//     <div>

//       <input type="text" value={input} onChange={handleInputChange}></input>
//       <button onClick={handleUpload}>Upload</button>
//       {names.map((name, idx) => {
//         return <p key={idx}>{name}</p>;
//       })}
//     </div>
//   );
// }

// export default App;


import { useState } from 'react';
import Template from './components/Template';
import TodoList from './components/TodoList';

function App() {
  const [todo, setTodo] = useState([
    {
      id:1,
      todo:'공부',
      done: false,
      edit: false,
    },
    {
      id:2,
      todo:'수면',
      done: false,
      edit: false,
    },
  ]);
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
    <Template />
      <input type="text" value={input} onChange={handleInputChange} onKeyDown={handleEnter}></input>
      <button onClick={handleUpload}>Add</button>
      <TodoList />
      </div>
  );
}

export default App;

