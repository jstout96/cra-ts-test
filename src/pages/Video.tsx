import * as React from 'react';
import { ComboBox, Stack, DefaultButton, IComboBox, IComboBoxOption } from '@fluentui/react'
import { inputs, outputs, types } from '../app/config'
import { useAppDispatch } from '../app/store';

export default function Video() {
    const [input, setInput] = React.useState<string | undefined>("");
    const [output, setOutput] = React.useState<string[]>([""]);
    const [type, setType] = React.useState<string | undefined>("AV");
    const dispatch = useAppDispatch();

    const onInputChange = (event: React.FormEvent<IComboBox>, option: any, index: any, value: string | undefined):void => {
        setInput(value)
    }

    const onOutputChange = (event: React.FormEvent<IComboBox>, option?: IComboBoxOption, index?: any, value?: string | undefined):void => {
        if (option) {
            setOutput(prevSelectedKeys =>
              option.selected ? [...prevSelectedKeys, option!.key as string] : prevSelectedKeys.filter(k => k !== option!.key),
            );
          }
        
    }

    const onTypeChange = (event: React.FormEvent<IComboBox>, option: any, index: any, value: string | undefined):void => {
        setType(value)
    }


    return(
        <div style={{marginTop: "25px"}}>
            <Stack horizontal horizontalAlign='space-between'>
                <ComboBox options={inputs} selectedKey={input} onChange={onInputChange} allowFreeform={false}></ComboBox>
                <ComboBox options={outputs} selectedKey={output} onChange={onOutputChange} allowFreeform={false} multiSelect></ComboBox>
                <ComboBox options={types} selectedKey={type} onChange={onTypeChange} allowFreeform={false}></ComboBox>
                <DefaultButton
                    onClick={() => {
                        if (input !== "") {
                            dispatch({type: 'send', payload: `Route~${input}~${output}~${type}`})
                        }
                    }}
                >
                    Route
                </DefaultButton>
            </Stack>
        </div>
    );
}