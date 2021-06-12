import { useMapEvents } from "react-leaflet"

export const Test = () => {
    useMapEvents({
      click: (e) => {
        console.log("clickeaste en: ", e.latlng)
      }
    })

    return (
      <div>a</div>
    )
  }