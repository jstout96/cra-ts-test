import { DefaultButton, Dropdown, IDropdownOption, Stack } from "@fluentui/react";
import { Power24Filled } from "@fluentui/react-icons";
import { displays } from "../app/config";
import { useAppSelector, useAppDispatch } from "../app/store";


export default function DisplayCard(props: { label: string; name: string; }){
    const displayOn = useAppSelector(state => {
        const display = state.settings.displays.find(s => s.id === props.name);
        if (display) return display.state.on;
    })
    const displayInput = useAppSelector(state => {
        const display = state.settings.displays.find(s => s.id === props.name);
        if (display) return display.state.input;
    })
    const dispatch = useAppDispatch()

    const inputs = displays.find(s => s.name === props.name)?.inputs.map(i => ({key: i, text: i})) ?? []

    const onSelectedInputChange = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption<any> | undefined, index?: number | undefined):void => {
        console.log(option)
        dispatch({type: 'send', payload: `Displays~${props.name}~Input~${option?.key}`})
    }
    return(
        <div style={{border: "2px white solid", borderRadius: "30px"}}>
            <Stack>
                <div>{props.label}</div>
                <DefaultButton 
                    className="PowerButton"
                    onClick={() => {
                        dispatch({type:'send', payload:`TogglePower~${props.name}`})
                    }}
                    styles={{root: {
                        background: displayOn ? '#DF0048' : 'white',
                        },
                    }}
                >
                    <Power24Filled className='DisplayIcon'/>
                </DefaultButton>
                <Dropdown 
                    className="InputDropdown" 
                    options={inputs}
                    selectedKey={displayInput} 
                    onChange={onSelectedInputChange} 
                    styles={{}}
                ></Dropdown>
            </Stack>
        </div>
    )
}