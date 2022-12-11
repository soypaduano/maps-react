import ListElementContainer from "./ListElementContainer";

function Profile(props) {

    let checkMusicSource = (url) => {
        if (url.includes("youtube")) {
            return <iframe width="560" height="315" src={`https://www.youtube.com/embed/${url.split('?v=')[1]}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        } else if (url.includes("soundcloud")) {
            return <p className="soundcloud-url"> <a href={url}> Escuchar en SoundCloud <i className="fa-brands fa-soundcloud"></i> </a> </p>
        } else if (url.includes("mixcloud")) {
            return <iframe title="MixCloud player" width="200" height="250" src="https://www.mixcloud.com/widget/follow/?u=%2Frelativa%2F" frameBorder="0" ></iframe>
        }
    }

    if (props.markerSelected.name) {
        let { date, url, name, type, description, adminPick, adminName, area } = props.markerSelected;
        return (

            (
                <div className="artist-profile-container">
                    <p onClick={() => { props.handleClickSetMarker(null) }} className="back"> <i className="fa-solid fa-arrow-left"></i> Ver todos</p>
                    <div className="title">
                        <h2>{name} {adminPick && <i class="fa-sharp fa-solid fa-star"></i>}</h2>
                    </div>
                    <div>{checkMusicSource(url)}</div>
                    <div className="header-profile">
                        <p className="type">{type} </p>
                        <p className="type">{date} </p>
                        <p className="area">{area} <i className="fa-solid fa-location-pin"></i> </p>
                    </div>
                    <p className="description">{description ? description : "Este artista no tiene descripcion"}</p>
                    <p className="adminName"> Añadido por <b>{adminName}</b></p>
                </div>
            )


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