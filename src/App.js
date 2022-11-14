import React from 'react';
import Parent from './optimies';
// import RefTutorial from './page';
import Reducermateri from './reducer';

function App() {
  return (
    <React.Fragment>
      <h1 className="bg-orange-500">Hook Materi</h1>
      <Reducermateri/>
      <Parent/>
      {/* <RefTutorial/> */}
    </React.Fragment>
  );
}

export default App;

// name export bisa lebih dari 1
// harus pake kurung kurawal
// namanya harus sama