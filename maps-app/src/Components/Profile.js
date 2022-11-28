import React from "react";

function Profile(props) {

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
        let { date, url, name, type, description, adminPick, adminName, area, isSelected } = props.markerSelected;
        return (
            <div className="artist-profile-container">
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
                <p className="adminName"> {adminName}</p>
            </div>
        )
    } else {
        return (
            <div className="artist-profile-container">
                <h1>Pincha un artista del mapa para ver toda su información</h1>
            </div>
        )
    }
}

export default Profile;