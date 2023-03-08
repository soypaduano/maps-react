import { GoogleMap, Marker } from "@react-google-maps/api";
import AdminMarkerComponent from "./AdminMarkerComponent";
import React from 'react';
import { nanoid } from 'nanoid'

function MapAdminController(props) {
  const objs = props.objs;
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
                className: `marker-label adding` 
            }}>
      </Marker>)
    }
  }

  let renderOldMarkers = () => {
    let arr = objs.map(element => {
      return <AdminMarkerComponent key={element.id} element={element} admin={true} handleEditMarker={props.handleEditMarker}/>
    });
    return arr;
  }

  return (<GoogleMap id="map" zoom={10} mapTypeId='hybrid' center={{lat: markerAdded.lat, lng: markerAdded.lng}} mapContainerClassName={"map"} onClick={ev => { getLatLon(ev) }}> 
    {renderOldMarkers()}
    {addPin()}
  </GoogleMap>)
}

export default MapAdminController;
