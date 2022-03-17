import * as React from 'react';
import { Slider, Stack, IconButton } from 'rsuite';
import { Icon } from '@rsuite/icons';
import './VolumeSlider.css'
import {
    FaVolumeDown,
    FaVolumeUp,
    FaVolumeMute,
} from 'react-icons/fa'
import { useAppSelector, useAppDispatch } from '../app/store';



const VolumeSlider = (props: { label: string; name: string; min: number; max: number; step: number;}) => {
    const sliderLevel = useAppSelector(state => {
        const slider = state.audio.sliders.find(s => s.id === props.name);
        if (slider) return slider.value;
    })
    const sliderMute = useAppSelector(state => {
        const slider = state.audio.sliders.find(s => s.id === props.name);
        if (slider) return slider.mute;
    })
    const dispatch = useAppDispatch()

    return(
        <Stack style={{paddingTop: "10px", marginLeft: "10px"}}>
            <div className="VolumeLabel">{props.label}</div>
            <div style={{width: "60vh", paddingLeft: "10px", paddingRight: "10px"}}>
                <Slider
                    value={sliderLevel}
                    onChange={v => {
                        dispatch({type:'send', payload:`Set~${props.name}~${v}`})
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
                    console.log(sliderLevel)
                    if ((sliderLevel || sliderLevel === 0) && sliderLevel <= props.max - props.step) {
                        dispatch({type:'send', payload:`Increment~${props.name}~${props.step}`})
                    }
                    else if ((sliderLevel || sliderLevel === 0) && sliderLevel < props.max) {
                        dispatch({type:'send', payload:`Set~${props.name}~${props.max}`})
                    }
                }}
            />
            <IconButton 
                className="VolumeButton"
                icon={<Icon className="VolumeIcon" as={FaVolumeDown}/>} 
                onClick={() => {
                    console.log(sliderLevel)
                    if ((sliderLevel || sliderLevel === 0) && sliderLevel >= props.min + props.step) {
                        dispatch({type:'send', payload:`Increment~${props.name}~${-props.step}`})
                    }
                    else if ((sliderLevel || sliderLevel === 0) && sliderLevel > props.min){
                        dispatch({type:'send', payload:`Set~${props.name}~${props.min}`})
                    }
                }}
            />
            <IconButton 
                className="VolumeButton"
                icon={<Icon className="VolumeIcon" as={FaVolumeMute}/>} 
                onClick={() => {
                    dispatch({type:'send', payload:`ToggleMute~${props.name}`})
                }}
                color={sliderMute ? 'red' : 'blue'}
            />
        </Stack>
    )
}


export default VolumeSlider