import React from 'react';
import './App.css';
function Heading({title}:{title:string;}){
return <h1>{title}</h1>
}
function App() {
  return (
    <div className="App">
      <Heading title="Hello there"/>
    </div>
  );
}

export default App;
