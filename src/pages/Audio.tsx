import { List } from 'rsuite'
import VolumeSlider from '../components/VolumeSlider';
import { sliders } from '../app/config'

export default function Audio() {
    return(
        <div>
            <List bordered={false} autoScroll={true} style={{height: (window.outerHeight - 60)}}>
                {sliders.map((item, index) => (
                <List.Item key={index} index={index} style={{background: "inherit", float: "right", marginRight: "30px"}}>
                    <VolumeSlider {...item} />
                </List.Item>
                ))}
            </List>
        </div>
    )
}