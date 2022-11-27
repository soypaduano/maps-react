import React from 'react';
import { nanoid } from 'nanoid'
//import shallowCompare from 'react-addons-shallow-compare'; // ES6
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";


function MarkerComponent(props) {

    let {id, name, coord} = props.element;
    let isSelected = props.selectedMarker.id ? props.selectedMarker.isSelected : false;

    let markerClicked = (id) =>{
        props.handleClickSetMarker(id)
    }

    if(id != props.selectedMarker.id){
        isSelected = false;
    }

    console.log("Yo, componente con ID " + id + " me actualizo y tengo un valor selected de " + isSelected)

    return (
    <Marker key={id} onClick={() => {
          markerClicked(id)
    }} onHover={() => {
        markerClicked(id)
    }} position=
    {{ lat: coord.lat, lng: coord.lon }}
     label={{
        text: `${name}`,
        fontFamily: 'Albert Sans, sans-serif',
        fontSize: '0.7rem',
        className: `marker-label ${(isSelected ? 'selected' : '')}` 
    }}>
    </Marker>
    )
    
}

export default React.memo(MarkerComponent, areEqual);


function areEqual(oldProps, nextProps){
    return !(oldProps.element.id === nextProps.selectedMarker.id || oldProps.element.id === oldProps.selectedMarker.id )
    /*
        Yo, como componente marker, me debería actualizar solo si: 
            - Coincide mi nombre con el selectedMarker: me selecciono.
            - Coincide mi nombre con el antiguo selectedMarker: Me desselecciono
    */
}



