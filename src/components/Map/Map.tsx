import { LatLngExpression } from "leaflet"
import { MapContainer, TileLayer } from "react-leaflet"
import { castles, paths } from "../../data"
import { CastleMark } from "../CastleMark/CastleMark"



import { Test } from "./test"

import "./Map.css";

const Map = ({}: any) => {
  const defaultPosition: LatLngExpression = [5, 20]

  return (
    <div className="map__container">
      <MapContainer
        center={defaultPosition}
        zoom={5}
        style={{ height: "100vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://cartocdn-gusc.global.ssl.fastly.net/ramirocartodb/api/v1/map/named/tpl_756aec63_3adb_48b6_9d14_331c6cbc47cf/all/{z}/{x}/{y}.png"
        />
        {
          castles.map(castle => {
            let initPaths = paths.filter(e => e[0] == castle.id)
            // @ts-ignore
            let allPaths = initPaths.reduce((acc, curr) => {
              let fromCoords = castle.position
              let to = castles.find(e => e.id === curr[1])
              // @ts-ignore
              return [...acc, [fromCoords, to.position, curr[2]]]
            }, [])

            return (
              <CastleMark {...castle} paths={allPaths} />
            )
          }
          )
        }
        <Test />
      </MapContainer>
    </div>
  );
};

export default Map;
