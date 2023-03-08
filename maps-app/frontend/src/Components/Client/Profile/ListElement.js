import { Typography, Box } from '@mui/material';

function ListElement(props){
    let {id, name, type, area} = props.element;
    let filterName = props.nameFilter;
    let show = true;

    show = name.includes(filterName) ? true : false;

    if(show){
        return (
            <li onClick={() => {props.handleClickSetMarker(id);}}> 
            <Box sx={{marginLeft: '10px'}}>
                <Typography variant='h6'> {name} </Typography>
                <Typography variant='subtitle1'> {type} - {area}</Typography>
            </Box>
            </li>
        )
    }
}

export default ListElement;

