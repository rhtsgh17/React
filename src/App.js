
import React from 'react';
import "./styles/style.css"
import Identitas from './module/identitas';
import Nilai from './module/nilai';
function App() {
  let [data, setData] = React.useState([10,20,30,40,50])
  return (
    <React.Fragment>
      <h1>Latihan Props</h1>
      <section className='section'>
        <div>
        <Identitas nama={'Rohmats'} kelas={'XI RPL'} nilai={100}/>
        <Identitas nama={'Rohmats'} kelas={'XI RPL'} nilai={100}/>
        <Identitas nama={'Rohmats'} kelas={'XI RPL'} nilai={100}/>
        <Identitas nama={'Rohmats'} kelas={'XI RPL'} nilai={100}/>
        </div>
        
        <Nilai nama={'Rohmats'} data={data}/>
      </section>
    </React.Fragment>
  );
}

export default App;

// name export bisa lebih dari 1
// harus pake kurung kurawal
// namanya harus sama