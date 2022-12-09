import React from 'react';
//import shallowCompare from 'react-addons-shallow-compare'; // ES6
import { Marker} from "@react-google-maps/api";


function AdminMarkerComponent(props) {

    let {id, name, coord} = props.element;

        return (
            <Marker key={id} onClick={() => {
            }} position=
            {{ lat: coord.lat, lng: coord.lon }}
            label={{
                text: `${name}`,
                fontFamily: 'Albert Sans, sans-serif',
                fontSize: '0.7rem',
                className: `marker-label admin-mode` 
            }}>
        </Marker>
        )   
    }

export default React.memo(AdminMarkerComponent, areEqual);


function areEqual(oldProps, nextProps){
    return true;
}



