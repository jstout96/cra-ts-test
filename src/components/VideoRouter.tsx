import { DefaultButton, Dropdown, IDropdownOption, SelectableOptionMenuItemType, Stack } from "@fluentui/react"
import React from "react";
import { inputs, outputs, types } from "../app/config"
import { useAppDispatch } from "../app/store";
import '../styles/VideoRouter.css'



export default function VideoRouter() {
    const [input, setInput] = React.useState<string | undefined>("");
    const [output, setOutput] = React.useState<string[]>([]);
    const [type, setType] = React.useState<string | undefined>("AV");
    const selectAllOutputs = output.length === outputs.length
    const dispatch = useAppDispatch();

    const onInputChange = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption<any>, index?: any):void => {
        setInput(option?.key + "")
    }

    const onOutputChange = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption<any>, index?: any):void => {
        console.log(option)
        if (option) {
            if (option?.itemType === SelectableOptionMenuItemType.SelectAll){
                selectAllOutputs
                ? setOutput([])
                : setOutput(outputs.map(o => o.key));
            } else {
                setOutput(prevSelectedKeys =>
                option.selected ? [...prevSelectedKeys, option!.key as string] : prevSelectedKeys.filter(k => k !== option!.key),
                );
            }
        }
        console.log(output)
        
    }

    const onTypeChange = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption<any>, index?: any):void => {
        setType(option?.key + "")
    }
    
    return(
        <div>
            <Stack horizontal horizontalAlign='space-around'>
                <Stack>
                    <div style={{textAlign:"center", color:"white"}}>Source: </div>
                    <Dropdown 
                        placeholder="Select Source"
                        className="videoDropdown" 
                        dropdownWidth={'auto'}
                        options={inputs} 
                        selectedKey={input} 
                        onChange={onInputChange}
                    ></Dropdown>
                </Stack>
                <Stack>
                    <div style={{textAlign:"center", color:"white"}}>Destination: </div>
                    <Dropdown 
                    placeholder="Select Destination(s)"
                        className="videoDropdown" 
                        options={[{
                                key:'selectAll', 
                                text:'Select All', 
                                itemType: SelectableOptionMenuItemType.SelectAll
                            }, 
                            ...outputs
                        ]} 
                        selectedKeys={output} 
                        onChange={onOutputChange} 
                        multiSelect
                    ></Dropdown>
                </Stack>
                <Stack>
                    <div style={{textAlign:"center", color:"white"}}>Type: </div>
                    <Dropdown 
                        className="videoDropdown" 
                        options={types} 
                        selectedKey={type} 
                        onChange={onTypeChange}
                    ></Dropdown>
                </Stack>
                <Stack.Item align="end">
                    <DefaultButton
                        style={{alignItems:"flex-end"}}
                        onClick={() => {
                            if (input !== "") {
                                dispatch({type: 'send', payload: `Route~${input}~${output}~${type}`})
                            }
                        }}
                    >
                        Route
                    </DefaultButton>
                </Stack.Item>
            </Stack>
            </div>
    )
}