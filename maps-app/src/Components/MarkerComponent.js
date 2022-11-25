import React from 'react';
import { nanoid } from 'nanoid'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";


function MarkerComponent(props) {


    let {name, coord } = props.obj;

    const [markerSelected, setMarkerSelected] = React.useState(false);

    let markerClicked = (id) =>{
        //setMarkerSelected(!markerSelected)
        props.handleClick(id, setMarkerSelected);
    }

    return (
        <Marker key={props.id} onClick={() => {
            markerClicked(props.id)
        }} position={{ lat: coord.lat, lng: coord.lon }} label={{
            text: `${name}`,
            className: `marker-label ${(markerSelected ? 'selected' : '')}` 
        }}>
            {console.log("rendering component marker with id " + props.id)}
        </Marker>
    )    
}

export default React.memo(MarkerComponent);

/*


/*
    Object: Pin
        - ID
        - Coords
        - Name
        - Type
        - Date
        - Url
        - Description
        - HandleClick
        - Admin {
            - AdminPick
            - AdminName
        }
        - isSelected
*/



