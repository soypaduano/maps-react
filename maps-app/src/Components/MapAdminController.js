import { GoogleMap } from "@react-google-maps/api";
import MarkerComponent from "./MarkerComponent";
import React from 'react';

function MapAdminController(props) {

  const [markerAdded, setMarkerAdded] = React.useState([]);

  let getLatLon = (ev) => {
    let lat = ev.latLng.lat();
    let lng = ev.latLng.lng();
    console.log("latitide = ", ev.latLng.lat());
    console.log("longitude = ", ev.latLng.lng());
    let stringCoords = {
      lat: ev.latLng.lat(),
      lon: ev.latLng.lng()
    }
    navigator.clipboard.writeText(JSON.stringify(stringCoords));
  }

  let createMarkersForMap = () => {
    let arr = props.objs.objs.map(element => {
      return <MarkerComponent key={element.id} element={element} handleClickSetMarker={props.handleClickSetMarker} selectedMarker={props.selectedMarker} filters={props.filters} />
    });
    return arr;
  }


  return (<GoogleMap id="map" zoom={10} mapTypeId='hybrid' center={selectedMarker.coord ? (selectedMarker.coord.lat, selectedMarker.coord.lng) : coord} mapContainerClassName={"map"} onClick={ev => { getLatLon(ev) }}>
    {console.log("renderizando el mapa")}
    {createMarkersForMap()}
  </GoogleMap>
  )
}

export default (MapController);