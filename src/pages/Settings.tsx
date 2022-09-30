import { Stack } from "@fluentui/react";
import { displays } from "../app/config";
import DisplayControls from "../components/DisplayControls";
import ProjectorControls from "../components/ProjectorControls";


export default function Settings() {
    return(
        <div style={{marginTop: "25px"}}>
            <Stack horizontal horizontalAlign='space-around'>
                {displays.map(d => {
                    if (d.type === 'display') {return <DisplayControls key={d.name} name={d.name} label={d.label}/>}
                    else if (d.type === 'projector') {return <ProjectorControls key={d.name} name={d.name} label={d.label}/>}
                })}
            </Stack>
        </div>
    );
}