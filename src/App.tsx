import React, { ReactNode, ReactElement } from 'react';
import './App.css';
function Heading({title}:{title:string;}){
return <h1>{title}</h1>
}
function HeadingwithContent({children}:{children:ReactNode}){
  return <h1>{children}</h1>
  }
  const defaultContainerProps={
    heading:<strong>My heading</strong>,
  }
  function Container({
    heading, 
    children,
  }:{children:ReactNode}&typeof defaultContainerProps):ReactElement{
    return <div><h1>{heading}</h1>{children}</div>
    }
    Container.defaultContainerProps=defaultContainerProps
function App() {
  return (
    <div className="App">
      <Heading title="Hello there"/>
      <HeadingwithContent>Hi!</HeadingwithContent>
      {/* <Container>Foo</Container> */}
    </div>
  );
}

export default App;
