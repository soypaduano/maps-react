import React from 'react';
import { nanoid } from 'nanoid'
//import shallowCompare from 'react-addons-shallow-compare'; // ES6
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";


function MarkerComponent(props) {

    let {id, name, coord, type} = props.element;
    let isSelected = props.selectedMarker.id ? props.selectedMarker.isSelected : false;
    let shouldIShow = true;

    let markerClicked = (id) =>{
        props.handleClickSetMarker(id)
    }

    if(id != props.selectedMarker.id) isSelected = false;



    console.log(props.filters)

    if(Object.keys(props.filters).length !== 0){
        //AdminPicks, type, year?
        for (let [key, value] of Object.entries(props.filters)) {
            if(key === "genre" && value !== type){
                shouldIShow = false;
            }
          }
    }


    if(shouldIShow){
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
    } else {
        return (
            <>
            </>
        )
    }
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



