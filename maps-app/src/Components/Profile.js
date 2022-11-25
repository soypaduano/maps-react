import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { func } from "prop-types";
import React from "react";


export function Profile(props){
    

    let checkMusicSource = (url) => {
        if(url.includes("youtube")){
            return <iframe width="560" height="315" src={`https://www.youtube.com/embed/${url.split('?v=')[1]}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        } else if(url.includes("soundcloud")){
            return <p className="soundcloud-url"> <a href={url}> Escuchar en SoundCloud <i class="fa-brands fa-soundcloud"></i> </a> </p>
        }
    }

    if(props.markerSelected.name){
        let {date, url, name, type } = props.markerSelected;
        return (
            <div>
                <p>{type}</p>
                <h1>{name}</h1>
                <div className="artist-profile-container">
                    <div >
                        {checkMusicSource(url)}
                    </div>
        
                    <div>
                        {date}
                    </div>
                    <div>
                        Añadido por: Admins
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <h1>Sin artista</h1>
        )
    }   
}