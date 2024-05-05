import logo from './logo.svg';
import './App.css';
import FormPage from './pages/Form';
import React from 'react';
import myImage from './assets/image.png';

function MyComponent(props, children) {
  return <img height={'auto'} width={"100%"} style={{ overflow: "clip", position: "absolute", top: '0', right: '0' }} src={myImage} alt="My Image" />;
}

function App() {
  return (
    <div className="App">
      <MyComponent></MyComponent>
      <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', width: '100vw', height: '100vh' }}>
        <FormPage />
      </section>

    </div>
  );
}

export default App;
