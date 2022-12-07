import React, { useContext } from 'react'
import AdminContext from "./AdminContext";
import ListElementContainer from "./ListElementContainer";

function Profile(props) {

    const adminContext = useContext(AdminContext )

    let checkMusicSource = (url) => {
        if (url.includes("youtube")) {
            return <iframe width="560" height="315" src={`https://www.youtube.com/embed/${url.split('?v=')[1]}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        } else if (url.includes("soundcloud")) {
            return <p className="soundcloud-url"> <a href={url}> Escuchar en SoundCloud <i class="fa-brands fa-soundcloud"></i> </a> </p>
        } else if (url.includes("mixcloud")) {
            return <iframe width="200" height="250" src="https://www.mixcloud.com/widget/follow/?u=%2Frelativa%2F" frameborder="0" ></iframe>
        }
    }

    if (props.markerSelected.name) {
        let { date, url, name, type, description, adminPick, adminName, area} = props.markerSelected;
        return (
            <AdminContext.Consumer>
                {theme => (
                    <div className="artist-profile-container">
                    <a onClick={() => {props.handleClickSetMarker(null)}} className="back"> <i class="fa-solid fa-list"></i> Ver lista</a>
                    {adminPick && <p className="adminPick"> Admin Pick <i className="fas fa-star"></i> </p>}
                    <div className="header-profile">
                        <p className="type">{type} </p>
                        <p className="area">{area} <i className="fa-solid fa-location-pin"></i> </p>
                    </div> 
                    <div className="title">
                        <h2>{name}</h2>
                        <span>{date}</span>
                    </div>
                    <div>{checkMusicSource(url)}</div>
                    <p className="description">{description}</p>
                    <p className="adminName"> Añadido por {adminName}</p>
                </div>
            )}
                    
            </AdminContext.Consumer>
        )
    } else {
        return (  
            <div className="list-profile-container">
                <h3>Pincha un artista del mapa para ver toda su información</h3>
                <ListElementContainer objs={props.objs} handleClickSetMarker={props.handleClickSetMarker} />
            </div>
        )
    }
}

export default Profile;