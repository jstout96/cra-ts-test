import { Slider, Stack, DefaultButton } from '@fluentui/react'
import '../styles/VolumeSlider.css'
import { useAppSelector, useAppDispatch } from '../app/store';
import { minDefault, maxDefault, stepDefault } from '../app/config'
import { Speaker124Filled, SpeakerMute24Filled, Speaker224Filled } from '@fluentui/react-icons';



const VolumeSlider = (props?: { label?: string; name?: string; min?: number; max?: number; step?: number; vertical?: boolean}) => {
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
        <Stack horizontal={!props?.vertical} style={{paddingTop: "10px", marginLeft: "10px", justifyContent:"flex-end", minWidth:"9vw"}}>
            <div className="VolumeLabel">{props?.label}</div>
            <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
                <Slider
                    styles={{container: {height: "50vh"}}}
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
                    vertical={props?.vertical}
                />
            </div>
            <DefaultButton 
                className="VolumeButton"
                onClick={() => {
                    dispatch({type:'send', payload:`Increment~${props?.name}~${step}`})
                }}
            >
                <Speaker224Filled/>
            </DefaultButton>
            <DefaultButton 
                className="VolumeButton"
                onClick={() => {
                    dispatch({type:'send', payload:`Decrement~${props?.name}~${step}`})
                }}
            >
                <Speaker124Filled/>
            </DefaultButton>
            <DefaultButton 
                className="VolumeButton"
                onClick={() => {
                    dispatch({type:'send', payload:`ToggleMute~${props?.name}`})
                }}
                styles={{root: {
                    background: sliderMute ? '#DF0048' : 'white',
                    },
                }}
            >
                <SpeakerMute24Filled/>
            </DefaultButton>
        </Stack>
    )
}


export default VolumeSlider