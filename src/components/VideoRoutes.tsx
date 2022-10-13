import { DetailsList } from "@fluentui/react";
import { useAppSelector } from "../app/store";


export default function VideoRoutes() {
    const routes = useAppSelector(state => state.video.routes)

    return(
        <div style={{ marginTop: "50px"}}>
            <DetailsList
                items={routes}
            >
                
            </DetailsList>
        </div>
    )
}

