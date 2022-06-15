import * as React from 'react';
import { DefaultButton, IconButton, Stack } from '@fluentui/react'
import './App.css';
import Video from './pages/Video';
import Audio from './pages/Audio';
import Settings from './pages/Settings';
import { ws } from './app/websocket';
import { useAppDispatch } from "./app/store"
import { Video48Filled, Settings48Filled, Speaker248Filled } from '@fluentui/react-icons';




function App() {
  const [active, setActive] = React.useState('video');
  const dispatch = useAppDispatch();
  ws.onmessage = e => {
    dispatch({type: 'receive', payload: (e.data)})
  }
  


  return (
    <div className="App" >
          <Stack>
              <Stack horizontal className="header">
                  <DefaultButton className="headerButton" onClick={() => setActive('video')} text="Video"><Video48Filled/></DefaultButton>
                  <DefaultButton className="headerButton" onClick={() => setActive('audio')} text="Audio"><Speaker248Filled/></DefaultButton>
                  <DefaultButton className="headerButton" onClick={() => setActive('settings')} text="Settings"><Settings48Filled/></DefaultButton>
              </Stack>
              {active === 'video' && <Video/>}
              {active === 'audio' && <Audio/>}
              {active === 'settings' && <Settings/>}
          </Stack>
    </div>
  );
}

export default App;

