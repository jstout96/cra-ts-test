import * as React from 'react';
import { Grid, Row, Col, Navbar, Nav } from 'rsuite'
import { Icon } from '@rsuite/icons';
import './App.css';
import Video from './pages/Video';
import Audio from './pages/Audio';
import Settings from './pages/Settings';
import {
  FaCog
} from 'react-icons/fa'

import "rsuite/dist/rsuite.min.css";

var ws = new WebSocket("ws://192.168.1.99:54321/Data");

function App() {
  const [active, setActive] = React.useState('video');
  //ws.onclose = (e) => {
    //setTimeout(() => {if (!ws.OPEN) ws = new WebSocket("ws://192.168.1.99:54321/Data")}, 5000)
  //}


  return (
    <div className="App" >
          <Navbar className="Nav">
            <Grid>
              <Col>
                <Row>
                  <Nav appearance={"tabs"} activeKey={active} onSelect={setActive}>
                    <Nav.Item eventKey="video">Video</Nav.Item>
                    <Nav.Item eventKey="audio">Audio</Nav.Item>
                  </Nav>
                  <Nav appearance={"tabs"} pullRight activeKey={active} onSelect={setActive}>
                    <Nav.Item icon={<Icon className= "SettingsIcon" as={FaCog} />} eventKey="settings">Settings</Nav.Item>
                  </Nav>
                </Row>
                {active === 'video' && <Video socket={ws} />}
                {active === 'audio' && <Audio socket={ws} />}
                {active === 'settings' && <Settings socket={ws} />}
              </Col>
            </Grid>
          </Navbar>
          
    </div>
  );
}

export default App;

