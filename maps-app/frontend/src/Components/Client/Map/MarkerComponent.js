import React from 'react';
import { Marker} from "@react-google-maps/api";
import {COLORS_TYPE_PIN} from './../../../utils/types'


function MarkerComponent(props) {

    let {id, name, lat, lng, type} = props.element;
    let isSelected = props.selectedMarker.id ? props.selectedMarker.isSelected : false;
    let shouldIShow = true;

    let markerClicked = (id) => {
        props.handleClickSetMarker(id)
    }

    if(id !== props.selectedMarker.id) isSelected = false;

    if(Object.keys(props.filters).length !== 0){
        for (let [key, value] of Object.entries(props.filters)) {
            if(type === key) shouldIShow = value ? true : false;
          }
    }

    
    if(shouldIShow){
        return (
            <Marker key={id} onClick={() => {
                markerClicked(id)
            }}

            position={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
            icon={{url: COLORS_TYPE_PIN[type]}}
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

    /*
        Debemos comprobar también que hay filters aplicandose... En caso de que haya filters aplicandose, renderizamos todo de nuevo.

    */

    if(oldProps.filters !== nextProps.filters){
        console.log("Filters are not the same, so we're re-rendering");
        return false;
    }

    return !(oldProps.element.id === nextProps.selectedMarker.id || oldProps.element.id === oldProps.selectedMarker.id )
    /*
        Yo, como componente marker, me debería actualizar solo si: 
            - Coincide mi nombre con el selectedMarker: me selecciono.
            - Coincide mi nombre con el antiguo selectedMarker: Me desselecciono
    */
}



