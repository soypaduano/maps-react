import { GoogleMap } from "@react-google-maps/api";
import MarkerComponent from "./MarkerComponent";
import React from 'react';

function MapController(props) {

  const coord = { lat: 40.41988, lng: -3.688780372508718 }
  let zoom = 10;

  let selectedMarker = props.selectedMarker;

  let getLatLon = (ev) => {
    console.log("latitide = ", ev.latLng.lat());
    console.log("longitude = ", ev.latLng.lng());
    let stringCoords = {
      lat: ev.latLng.lat(),
      lon: ev.latLng.lng()
    }
    navigator.clipboard.writeText(JSON.stringify(stringCoords));
  }

  let createMarkersForMap = () => {
    let arr = props.objs.map(element => {
      return <MarkerComponent key={element.id} element={element} handleClickSetMarker={props.handleClickSetMarker} selectedMarker={props.selectedMarker} filters={props.filters} />
    });
    return arr;
  }

  return (<GoogleMap id="map" zoom={zoom} mapTypeId='hybrid' center={selectedMarker.coord ? (selectedMarker.coord.lat, selectedMarker.coord.lng) : coord} mapContainerClassName={"map"} onClick={ev => { getLatLon(ev) }}>
    {console.log("renderizando el mapa")}
    {createMarkersForMap()}
  </GoogleMap>
  )
}

export default (MapController);