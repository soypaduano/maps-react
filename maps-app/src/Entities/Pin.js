import React from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { nanoid } from 'nanoid'



const label = {

}

class Pin {

    constructor(lat, lng, name, url, date, handleClick, type) {
        const id = nanoid()
        this.coord = { lat: lat, lng: lng }
        this.name = name;
        this.type = type;
        this.date = date;
        this.url = url;
        this.description = "Esta es la descripcion"
        this.handleClick = handleClick;
        this.admin = {
            adminPick: false,
            adminName: ""
        }
        this.isSelected = false;
        this.id = id;
        this.jsx = (
            
            <Marker key={id} onClick={() => this.handleClick(this)} animation={window.google.maps.Animation.DROP} position={{ lat: lat, lng: lng }} label={{
                text: `${this.name}`,
                className: `marker-label ${(this.isSelected ? 'selected' : '')}` 
            }}>
                {console.log("rendering this")}

            </Marker>
        )
    }

    
}

export default Pin;


/*
<Marker color="blue" key={id} onClick={() => this.handleClick()} animation={window.google.maps.Animation.DROP} position={{ lat: lat, lng: lng }}>
                <InfoWindow position={{ lat: lat, lng: lng }}>
                    <div>
                        hola
                    </div>
                </InfoWindow>
            </Marker>
*/


