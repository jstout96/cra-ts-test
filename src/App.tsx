import React from 'react';
import { Button, Grid } from 'rsuite'
import Slider from 'rsuite/Slider'
import './App.css';
import VolumeSlider from './components/VolumeSlider';

const ws = new WebSocket("ws://192.168.1.99:54321/Log");

function App() {
  return (
    <div 
      className="App" 
      style={{
        display: "flex", 
        height: "100vh",
        backgroundColor: "#0071BC"
      }}
    >
      <Grid>
        <Button
          onClick={() => ws.send("Test")}
        >
          Send Message
        </Button>
        <Slider style={{display: "flex", position: "absolute", top: "50vh"}}/>
      </Grid>
    </div>
  );
}

export default App;

{/* <VolumeSlider 
          label='Wireless Mic 1'
          name='WM1'
          socket={ws}
        /> */}