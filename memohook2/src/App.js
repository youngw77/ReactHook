import React, {useEffect, useState, useMemo} from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = useMemo(()=>{
    return{
      country: isKorea ? '한국' : '외국'
    };
  },[isKorea]);


  // {
  //   country: isKorea ? '한국' : '외국'
  // }

  useEffect(()=> {
    console.log("useEffect 호출");
  }, [location]);

  return (
    <div>
      <h2>하루 몇끼 먹나요?</h2>
      <input
      type="number"
      value={number}
      onChange={(e)=>setNumber(e.target.value)}
      />
      <hr></hr>
      <h2>어느 나라에 있나요?</h2>
      <p>나라: {location.country}</p>
      <button onClick={()=>setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
}

export default App;
