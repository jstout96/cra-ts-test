import { Slider, Stack, IconButton, DefaultButton } from '@fluentui/react'
import './VolumeSlider.css'
import { useAppSelector, useAppDispatch } from '../app/store';
import { minDefault, maxDefault, stepDefault } from '../app/config'
import { Speaker124Filled, SpeakerMute24Filled, Speaker224Filled } from '@fluentui/react-icons';



const VolumeSlider = (props?: { label?: string; name?: string; min?: number; max?: number; step?: number;}) => {
    const sliderLevel = useAppSelector(state => {
        const slider = state.audio.sliders.find(s => s.id === props?.name);
        if (slider) return slider.value;
    })
    const sliderMute = useAppSelector(state => {
        const slider = state.audio.sliders.find(s => s.id === props?.name);
        if (slider) return slider.mute;
    })
    const dispatch = useAppDispatch()
    const min = props?.min ?? minDefault
    const max = props?.max ?? maxDefault
    const step = props?.step ?? stepDefault

    return(
        <Stack horizontal style={{paddingTop: "10px", marginLeft: "10px"}}>
            <div className="VolumeLabel">{props?.label}</div>
            <div style={{width: "60vh", paddingLeft: "10px", paddingRight: "10px"}}>
                <Slider
                    
                    onChange={v => {
                        dispatch({type:'send', payload:`Set~${props?.name}~${v}`})
                    }}
                    min={min}
                    max={max}
                    step={step}
                    valueFormat={(v) => {
                        const p = Math.trunc((v - min)/(max - min) * 100)
                        return `${p}%`
                    }}
                    value={sliderLevel}
                />
            </div>
            <DefaultButton 
                className="VolumeButton"
                onClick={() => {
                    if ((sliderLevel || sliderLevel === 0) && sliderLevel <= max - step) {
                        dispatch({type:'send', payload:`Increment~${props?.name}~${step}`})
                    }
                    else if ((sliderLevel || sliderLevel === 0) && sliderLevel < max) {
                        dispatch({type:'send', payload:`Set~${props?.name}~${max}`})
                    }
                }}
            >
                <Speaker224Filled/>
            </DefaultButton>
            <DefaultButton 
                className="VolumeButton"
                onClick={() => {
                    if ((sliderLevel || sliderLevel === 0) && sliderLevel >= min + step) {
                        dispatch({type:'send', payload:`Decrement~${props?.name}~${step}`})
                    }
                    else if ((sliderLevel || sliderLevel === 0) && sliderLevel > min){
                        dispatch({type:'send', payload:`Set~${props?.name}~${min}`})
                    }
                }}
            >
                <Speaker124Filled/>
            </DefaultButton>
            <DefaultButton 
                className="VolumeButton"
                onClick={() => {
                    dispatch({type:'send', payload:`ToggleMute~${props?.name}`})
                }}
                color={sliderMute ? 'red' : 'blue'}
            >
                <SpeakerMute24Filled/>
            </DefaultButton>
        </Stack>
    )
}


export default VolumeSlider