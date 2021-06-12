import { Marker, Tooltip, Polyline } from "react-leaflet"
import L from 'leaflet'

const CastleIcon = new L.Icon({
    iconUrl: "https://i.imgur.com/U7viYXM.png",
    iconSize: [15, 18]
})

export const CastleMark = ({position, title, kingdom, paths}: any) => {
    console.log(paths)

    return (
        <Marker
            position={position}
            icon={CastleIcon}
        >
            <Tooltip>
                <div style={{textAlign: "center"}}>
                    <h3 style={{margin: 5}}>{title}</h3>
                    <p style={{margin: 2}}>{kingdom}</p>
                </div>
            </Tooltip>
            {
                // @ts-ignore
                paths.map(path => 
                    <Polyline positions={[path[0], path[1]]}>
                        <Tooltip>{path[2]} horas.</Tooltip>
                    </Polyline>    
                )
            }
            
        </Marker>
    )
}