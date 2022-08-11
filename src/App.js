

import React from 'react';

function App() {

  let [count, setCount] = React.useState(0);
  let [text, setText] = React.useState(true);
  let [message, setMessage] = React.useState(0);
  
  React.useEffect(() => {
    setMessage(message + 1);
    console.log('useEffect berjalan');
   
  },[count,text]);
  let [isloading, setIsloading] =React.useState(true)
  React.useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  }, []);

  if(isloading) {
    return <h1>Loading.......................</h1>
  }
  return (
    <React.Fragment>

      <h1>Belajar Use Effect</h1>
      <h3>{message === 10 ?"ini tujuh belas": "bukan 17 belas"}</h3>
      <h1>Message: {message}</h1>
      <h1>Count: {count}</h1>
      <button
      onClick={() => {
        setCount(count +1);
      }}
      > 
      Tambah
      </button>
      <button 
      onClick={() =>{
        setText(!text);
      }}
      
      >
        ubah
      </button>
    </React.Fragment>
  );
}

export default App;

// name export bisa lebih dari 1
// harus pake kurung kurawal
// namanya harus sama