import logo from './logo.svg';
import './App.css';
import FormPage from './pages/Form';
import React from 'react';
import myImage from './assets/image.png';
import { ConfigProvider } from 'antd';

function MyComponent(props, children) {
  return <img height={'100%'} width={"100%"} style={{ overflow: "clip", position: "absolute", top: '0', right: '0' }} src={myImage} alt="My Image" />;
}

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorPrimary: 'transparent',
          }
        },
        token: {
          // Seed Token
          colorPrimary: 'transparent',
          colorBgContainer: 'transparent',
          colorBgMask: 'transparent',
          colorPrimaryBorderHover: 'transparent',
          colorBorder: 'transparent'
        },
      }}
    >
      <div className="App">
        <MyComponent></MyComponent>
        <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', width: '100vw', height: '100vh' }}>
          <FormPage />
        </section>

      </div>
    </ConfigProvider>
  );
}

export default App;
