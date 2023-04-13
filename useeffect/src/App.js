import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');
  const handleCountUpdadte = () => {
    setCount(count +1);
  };
  const handleInputChange = (e) => {
    setName(e.target.value);
  };
// 랜더링 될때 마다 실행
  useEffect(() => {
    console.log('rendering');
  });

  // 마운트 + count가 변화될떄 실행
  useEffect(() => {
    console.log('count');
  },[count]);

  // 마운트 + name 변화될떄 실행
  useEffect(() => {
    console.log('name');
  },[name]);

  // 최초 랜더링 될때만 실행
  useEffect(() => {
    console.log('redering')
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdadte}>Update</button>
      <span>count {count} </span>
      <br></br>
      <input type="text" value={name} onChange={handleInputChange}></input>
      <br></br>
      <span>name: {name}</span>
    </div>

  );
}

export default App;
