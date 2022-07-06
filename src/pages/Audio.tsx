import { Stack } from '@fluentui/react'
import VolumeSlider from '../components/VolumeSlider';
import { sliders } from '../app/config'

export default function Audio() {
    return(
        <div>
            
            <Stack horizontal style={{overflowX:"scroll", maxHeight:"80vh", maxWidth:"100vw"}}>
                {sliders.map(s => (
                    <VolumeSlider {...s} vertical key={s.name}/>
                ))}
            </Stack>
        </div>
    )
}