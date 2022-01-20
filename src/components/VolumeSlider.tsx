import * as React from 'react';
import { Slider, Stack, IconButton } from 'rsuite';
import { Icon } from '@rsuite/icons';
import {
    FaVolumeDown,
    FaVolumeUp,
    FaVolumeMute
} from 'react-icons/fa'

function VolumeSlider(props: { label: string; name: string; socket: WebSocket}) {
    const [sliderValue, setSliderValue] = React.useState(50);


    return(
        <Stack>
            <div>{props.label}</div>
            <Slider
                value={sliderValue}
                onChange={v => setSliderValue(v)}
                vertical
                style={{height: "60vh"}}
            />
            <IconButton icon={<Icon as={FaVolumeUp}/>} onClick={() => props.socket.send('Increment~' + props.name)}/>
            <IconButton icon={<Icon as={FaVolumeDown}/>} onClick={() => props.socket.send('Decrement~' + props.name)}/>
            <IconButton icon={<Icon as={FaVolumeMute}/>} onClick={() => props.socket.send('ToggleMute~' + props.name)}/>
        </Stack>
    )
}


export default VolumeSlider