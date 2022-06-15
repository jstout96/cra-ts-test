import { List } from '@fluentui/react'
import VolumeSlider from '../components/VolumeSlider';
import { sliders } from '../app/config'

const onRenderCell = (item?: {label?: string | undefined, name?: string, min?: number | undefined, max?: number | undefined, step?: number | undefined}, index?: number | undefined ): JSX.Element => {
    return(
        <div style={{background: "inherit", float: "right", marginRight: "30px"}}>
            <VolumeSlider {...item} />
        </div>
    )
}

export default function Audio() {
    return(
        <div>
            <List items={sliders} onRenderCell={onRenderCell} style={{height: (window.outerHeight - 60)}}>

            </List>
        </div>
    )
}