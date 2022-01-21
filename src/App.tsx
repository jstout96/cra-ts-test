import React from 'react';
import { Button, Grid, Row, Col } from 'rsuite'
import './App.css';
import VolumeSlider from './components/VolumeSlider';

import "rsuite/dist/rsuite.min.css";

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
        <Row>
          <Button
            onClick={() => ws.send("Test")}
          >
            Send Message
          </Button>
        </Row>

        <Row>
          <Col>
            <VolumeSlider 
              label='Wireless Mic 1'
              name='WM1'
              socket={ws}
              min={-12}
              max={6}
            /> 
          </Col>
          <Col>
            <VolumeSlider 
              label='Wireless Mic 2'
              name='WM2'
              socket={ws}
              min={-12}
              max={6}
            /> 
          </Col>
          <Col>
            <VolumeSlider 
              label='Wireless Mic 3'
              name='WM3'
              socket={ws}
              min={-12}
              max={6}
            /> 
          </Col>
          <Col>
            <VolumeSlider 
              label='Wireless Mic 4'
              name='WM4'
              socket={ws}
              min={-12}
              max={6}
            /> 
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;

