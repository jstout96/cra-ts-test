import * as React from 'react';
import { Slider, Stack, IconButton } from 'rsuite';
import { Icon } from '@rsuite/icons';
import './VolumeSlider.css'
import {
    FaVolumeDown,
    FaVolumeUp,
    FaVolumeMute,
} from 'react-icons/fa'
import { slices } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';

const VolumeSlider = (props: { label: string; name: string; socket: WebSocket; min: number; max: number;}) => {
    const [sliderValue, setSliderValue] = React.useState(0);
    const dispatch = useDispatch()
    const n = props.name;
    return(
        <Stack style={{paddingTop: "10px", marginLeft: "10px"}}>
            <div className="VolumeLabel">{props.label}</div>
            <div style={{width: "60vh", paddingLeft: "10px", paddingRight: "10px"}}>
                <Slider
                    value={sliderValue}
                    onChange={v => {
                        dispatch(slices[n].actions.set(v).type)
                    }}
                    min={props.min}
                    max={props.max}
                    progress
                />
            </div>
            <IconButton 
                className="VolumeButton"
                icon={<Icon className="VolumeIcon" as={FaVolumeUp}/>} 
                onClick={() => {
                    slices[n].actions.increment()
                }}
            />
            <IconButton 
                className="VolumeButton"
                icon={<Icon className="VolumeIcon" as={FaVolumeDown}/>} 
                onClick={() => {
                    slices[n].actions.decrement()
                }}
            />
            <IconButton 
                className="VolumeButton"
                icon={<Icon className="VolumeIcon" as={FaVolumeMute}/>} 
                onClick={() => props.socket.send(`ToggleMute~${props.name}`)}
            />
        </Stack>
    )
}


export default VolumeSlider