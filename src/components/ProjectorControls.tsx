import { Stack, DefaultButton } from '@fluentui/react'
import { ChevronCircleUp32Filled, ChevronCircleDown32Filled } from '@fluentui/react-icons';
import { useAppDispatch } from '../app/store';
import DisplayControls from './DisplayControls';
import './DisplayControls.css'

const ProjectorControls = (props: { label: string; name: string; }) => {
    const dispatch = useAppDispatch()

    return(
        <div>
            <Stack horizontal>
                <DisplayControls {...props}/>
                <Stack>
                    <DefaultButton
                        className = "ScreenButton"
                        onClick={() => {dispatch({type:'send', payload:'Screen~ScreenUp'})}}
                    >
                        <ChevronCircleUp32Filled className='DisplayIcon'/>
                    </DefaultButton>
                    <DefaultButton
                        className = "ScreenButton"
                        onClick={() => {dispatch({type:'send', payload:'Screen~ScreenDown'})}}
                    >
                        <ChevronCircleDown32Filled className='DisplayIcon'/>
                    </DefaultButton>
                </Stack>
            </Stack>
        </div>
    )
}

export default ProjectorControls