import * as React from 'react';
import { DefaultButton, IPivotItemProps, Pivot, PivotItem, Stack } from '@fluentui/react'
import './styles/App.css';
import Video from './pages/Video';
import Audio from './pages/Audio';
import Settings from './pages/Settings';
import { ws } from './app/websocket';
import { useAppDispatch } from "./app/store"
import { Video48Filled, Settings48Filled, Speaker248Filled } from '@fluentui/react-icons';




function App() {
  const dispatch = useAppDispatch();
  ws.onmessage = e => {
    dispatch({type: 'receive', payload: (e.data)})
  }

  return (
    <div className="App" >
      <Pivot style={{alignContent:"center", width:"100%"}} linkFormat="tabs">
        <PivotItem headerText="Video" itemIcon="Video48Filled" onRenderItemLink={_customRenderer}>
          <Video/>
        </PivotItem>
        <PivotItem headerText="Audio" itemIcon="Speaker48Filled">
          <Audio/>
        </PivotItem>
        <PivotItem headerText="Settings" itemIcon="Settings48Filled">
          <Settings/>
        </PivotItem>
      </Pivot>
    </div>
  );
}

function _customRenderer(
  link?: IPivotItemProps,
  defaultRenderer?: (link?: IPivotItemProps) => JSX.Element | null,
): JSX.Element | null {
  if (!link || !defaultRenderer) {
    return null;
  }

  return (
    <span style={{ flex: '0 1 100%' }}>
      {defaultRenderer({ ...link, itemIcon: undefined })}
      <Video48Filled />
    </span>
  );
}

export default App;

