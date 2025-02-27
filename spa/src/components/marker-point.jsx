import { useEffect } from 'react';
import { Popup, Marker, useMapEvents } from 'react-leaflet'

export function MarkerPoint({ position, setPosition }) {
  const [x,y] = position;
  const map = useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng])
    }
  })

  useEffect(()=>{
    map.flyTo({
      lat: x,
      lng: y
    }, map.getZoom())
  }, [position])
  return (
    <Marker position={position} >
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  )
}



