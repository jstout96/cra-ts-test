import * as React from 'react';
import {SelectPicker, CheckPicker, Button, Stack } from 'rsuite';
import { inputs, outputs, types } from '../app/config'

export default function Video(props: {socket: WebSocket;}) {
    const [input, setInput] = React.useState("");
    const [output, setOutput] = React.useState([""]);
    const [type, setType] = React.useState("");

    return(
        <div style={{marginTop: "25px"}}>
            <Stack justifyContent='space-around'>
                <SelectPicker data={inputs} value={input} onChange={setInput} searchable={false} size={'lg'}></SelectPicker>
                <CheckPicker data={outputs} value={output} onChange={setOutput}searchable={false} size={'lg'}></CheckPicker>
                <SelectPicker data={types} value={type} onChange={setType} searchable={false} size={'lg'} defaultValue={'AV'}></SelectPicker>
                <Button
                    onClick={() => {
                        if (input !== "") {
                            props.socket.send(`Route~${input}~${output}~${type}`)
                        }
                    }}
                >
                    Route
                </Button>
            </Stack>
        </div>
    );
}