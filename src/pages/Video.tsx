import * as React from 'react';
import { Stack } from '@fluentui/react'
import { useAppDispatch, useAppSelector } from '../app/store';
import VideoRouter from '../components/VideoRouter'
import VideoRoutes from '../components/VideoRoutes'

export default function Video() {
    

    return(
        <div style={{marginTop: "25px"}}>
            <Stack>
                <VideoRouter/>
                <VideoRoutes/>
            </Stack>
        </div>
    );
}