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
import { ws } from './app/websocket';
import { useAppDispatch } from "./app/store"

import "rsuite/dist/rsuite.min.css";



function App() {
  const [active, setActive] = React.useState('video');
  const dispatch = useAppDispatch();
  ws.onmessage = e => {
    dispatch({type: 'receive', payload: (e.data)})
  }


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
                {active === 'video' && <Video/>}
                {active === 'audio' && <Audio/>}
                {active === 'settings' && <Settings/>}
              </Col>
            </Grid>
          </Navbar>
          
    </div>
  );
}

export default App;

