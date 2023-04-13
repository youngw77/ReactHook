import React, {useState, useRef, useEffect} from 'react';

function App() {
  // const[count, setCount] = useState(1);
  // const renderCount = useRef(1);

  // useEffect(() => {
  //   renderCount.current = renderCount.current+1;
  //   console.log('rendering count:', renderCount.current);
  // })
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`환영합니다 ${inputRef.current.value}!`);
    inputRef.current.focus();
  }
  return (
    // <div>
    //   <p>Count: {count}</p>
    //   <button onClick={() => setCount(count+1)}>UP</button>
    // </div>
    <div>
      <input ref={inputRef} type="text" placeholder='username'></input>
      <button onClick={login}>로그인</button>
    </div>
  );
}

export default App;
