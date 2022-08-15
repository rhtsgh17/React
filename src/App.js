
import React from 'react';
import Card from './komponen/card'
import Warna from './komponen/warna';

function App() {
  const [count, setCount] = React.useState(0);
 let [warna,setWarna] = React.useState("blue");
  return (
   
    <React.Fragment>
        <Warna warna={warna} setWarna={setWarna}/>
       <Card count={count} setCount={setCount}/>
        </React.Fragment>
  );
}

export default App;

