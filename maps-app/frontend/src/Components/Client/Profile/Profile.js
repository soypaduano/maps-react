import ListElementContainer from "./ListElementContainer";
import {Button, Divider, Container, Box, Typography} from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

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
                    <Button onClick={() => { props.handleClickSetMarker(null) }}> 
                    <FormatListBulletedIcon sx={{margin: '5px'}}/>
                        Volver a la lista
                    </Button>
                    <Divider />
                    <Container sx={{marginTop: '10px'}}>
                        <Typography variant="h4">{name}</Typography>
                        <span>{date} - {area} </span>
                        <div>{checkMusicSource(url)}</div>
                    </Container>
                    <Box>
                        <Typography className="description">{description ? description : "Este artista no tiene descripcion"}</Typography>
                    </Box>
                    <p className="adminName"> Añadido por <b>{adminName}</b></p>
                </div>
            )


        )
    } else {
        return (
            <div className="list-profile-container">
                <ListElementContainer objs={props.objs} handleClickSetMarker={props.handleClickSetMarker} />
            </div>
        )
    }
}

export default Profile;