import React from 'react';
import { List } from 'rsuite'
import VolumeSlider from '../components/VolumeSlider';
import { sliders } from '../app/config'

export default function Audio(props: {socket: WebSocket;}) {
    
    return(
        <div>
            <List bordered={false} autoScroll={true} style={{height: (window.outerHeight - 60)}}>
                {sliders.map((item, index) => (
                <List.Item key={index} index={index} style={{background: "inherit"}}>
                    <VolumeSlider {...item} socket={props.socket}/>
                </List.Item>
                ))}
            </List>
          </div>
    )
}