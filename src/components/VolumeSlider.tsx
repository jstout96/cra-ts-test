import * as React from 'react';
import { Slider, Stack, IconButton } from 'rsuite';
import { Icon } from '@rsuite/icons';
import {
    FaVolumeDown,
    FaVolumeUp,
    FaVolumeMute
} from 'react-icons/fa'

const VolumeSlider = (props: { label: string; name: string; socket: WebSocket; min: number; max: number;}) => {
    const [sliderValue, setSliderValue] = React.useState(0);


    return(
        <Stack direction="column">
            <div>{props.label}</div>
            <div style={{height: "60vh"}}>
                <Slider
                    value={sliderValue}
                    onChange={v => {
                        props.socket.send(`Set~${props.name}~${v}`)
                        setSliderValue(v)
                    }}
                    vertical
                    min={props.min}
                    max={props.max}
                    progress
                />
            </div>
            <IconButton icon={<Icon as={FaVolumeUp}/>} onClick={() => {
                props.socket.send(`Increment~${props.name}`)
                if (sliderValue < props.max)  setSliderValue(sliderValue + 1)
            }}/>
            <IconButton icon={<Icon as={FaVolumeDown}/>} onClick={() => {
                props.socket.send(`Decrement~${props.name}`)
                if (sliderValue > props.min)  setSliderValue(sliderValue - 1)
            }}/>
            <IconButton icon={<Icon as={FaVolumeMute}/>} onClick={() => props.socket.send(`ToggleMute~${props.name}`)}/>
        </Stack>
    )
}


export default VolumeSlider