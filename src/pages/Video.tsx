import * as React from 'react';
import { ComboBox, Stack, DefaultButton, IComboBox, IComboBoxOption, SelectableOptionMenuItemType } from '@fluentui/react'
import { useAppDispatch, useAppSelector } from '../app/store';
import VideoRouter from '../components/VideoRouter'

export default function Video() {
    const routes = useAppSelector(state => state.video.routes)

    return(
        <div style={{marginTop: "25px"}}>
            <Stack>
                <VideoRouter/>
                {routes.map(r => (
                    <Stack horizontal horizontalAlign='space-around' key={r.id}>
                        <div style={{textAlign:"left"}}>{r.source}</div>
                        <div style={{textAlign:"left"}}>{r.destination}</div>
                        <div style={{textAlign:"left"}}>{r.type}</div>
                        <div/>
                    </Stack>
                ))}
            </Stack>
        </div>
    );
}