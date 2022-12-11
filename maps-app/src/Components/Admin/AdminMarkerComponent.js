import React from 'react';
//import shallowCompare from 'react-addons-shallow-compare'; // ES6
import { Marker} from "@react-google-maps/api";


function AdminMarkerComponent(props) {

    let {id, name, lat, lng} = props.element;
        return (
            <Marker key={id} onClick={() => {
                alert("Editando..")
            }} position=
            {{ lat: parseFloat(lat), lng: parseFloat(lng)}}
            label={{
                text: `${name}`,
                fontFamily: 'Albert Sans, sans-serif',
                fontSize: '0.7rem',
                className: `marker-label admin-mode` 
            }}>
                {console.log("Rendering myself")}
        </Marker>
        )   
    }

export default React.memo(AdminMarkerComponent, areEqual);

function areEqual(oldProps, nextProps){
    return true;
}



