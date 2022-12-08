import { GoogleMap, Marker } from "@react-google-maps/api";
import React from 'react';
import { nanoid } from 'nanoid'

function MapAdminController(props) {

  const [markerAdded, setMarkerAdded] = React.useState({lat: 40.41988, lng: -3.688780372508718})

  let getLatLon = (ev) => {
    let stringCoords = {
      lat: ev.latLng.lat(),
      lng: ev.latLng.lng()
    }
    setMarkerAdded(stringCoords)
    props.handleClickSetCoordinates(stringCoords)
  }

  let addPin = () => {
    if(markerAdded.lat){
      return (<Marker key={nanoid()}  position={{lat: markerAdded.lat, lng: markerAdded.lng}}
            label={{
                text: `Guardar aquí`,
                fontFamily: 'Albert Sans, sans-serif',
                fontSize: '0.7rem',
                className: `marker-label` 
            }}>
      </Marker>)
    }
  }

  return (<GoogleMap id="map" zoom={10} mapTypeId='hybrid' center={{lat: markerAdded.lat, lng: markerAdded.lng}} mapContainerClassName={"map"} onClick={ev => { getLatLon(ev) }}> 
    {addPin()}
  </GoogleMap>)
}

export default React.memo(MapAdminController, areEqual);

function areEqual(oldProps, newProps){
  return true;
}
