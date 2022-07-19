import { ComboBox, DefaultButton, IComboBox, IComboBoxOption, SelectableOptionMenuItemType, Stack } from "@fluentui/react"
import React from "react";
import { inputs, outputs, types } from "../app/config"
import { useAppDispatch } from "../app/store";



export default function VideoRouter() {
    const [input, setInput] = React.useState<string | undefined>("");
    const [output, setOutput] = React.useState<string[]>([""]);
    const [type, setType] = React.useState<string | undefined>("AV");
    const selectAllOutputs = output.length === outputs.length
    const dispatch = useAppDispatch();

    const onInputChange = (event: React.FormEvent<IComboBox>, option: any, index: any, value: string | undefined):void => {
        setInput(value)
    }

    const onOutputChange = (event: React.FormEvent<IComboBox>, option?: IComboBoxOption, index?: any, value?: string | undefined):void => {
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
        
    }

    const onTypeChange = (event: React.FormEvent<IComboBox>, option: any, index: any, value: string | undefined):void => {
        setType(value)
    }
    
    return(
        <div>
            <Stack horizontal horizontalAlign='space-around'>
                <Stack>
                    <div style={{textAlign:"left"}}>Source: </div>
                    <ComboBox options={inputs} selectedKey={input} onChange={onInputChange} allowFreeform={false}></ComboBox>
                </Stack>
                <Stack>
                    <div style={{textAlign:"left"}}>Destination: </div>
                    <ComboBox options={[{key:'selectAll', text:'Select All', itemType: SelectableOptionMenuItemType.SelectAll}, ...outputs]} selectedKey={output} onChange={onOutputChange} allowFreeform={false} multiSelect></ComboBox>
                </Stack>
                <Stack>
                    <div style={{textAlign:"left"}}>Type: </div>
                    <ComboBox options={types} selectedKey={type} onChange={onTypeChange} allowFreeform={false}></ComboBox>
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