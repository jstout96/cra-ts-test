import { DetailsList } from "@fluentui/react";
import { useAppSelector } from "../app/store";


export default function VideoRoutes() {
    const routes = useAppSelector(state => state.video.routes)

    return(
        <div>
            <DetailsList
                items={routes}
            >
                
            </DetailsList>
        </div>
    )
}

/*{routes.map(r => (
                    <Stack horizontal horizontalAlign='space-around' key={r.id}>
                        <div style={{textAlign:"left"}}>{r.source}</div>
                        <div style={{textAlign:"left"}}>{r.destination}</div>
                        <div style={{textAlign:"left"}}>{r.type}</div>
                        <div/>
                    </Stack>
                ))}*/