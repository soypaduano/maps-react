import React from 'react';
import ListElement from './ListElement';
import { nanoid } from 'nanoid'
import {TextField, InputAdornment, Typography, Box} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function ListElementContainer(props){

    const [nameFilter, setNameFilter] = React.useState("");

    let createElementListJsx = () => {
        return props.objs.sort((a, b) => a.name.localeCompare(b.name)).map(element => <ListElement key={nanoid()} element={element} handleClickSetMarker={props.handleClickSetMarker} nameFilter={nameFilter}/>)
    }

    let handleSearchNameFilter = (event) => {
        let { value } = event.target
        setNameFilter(value)
    }

    return (
        <div>
          <Box sx={{padding: '10px'}}>
            <Typography variant='h5'>Pincha un artista del mapa para ver toda su información</Typography>
          </Box>
        
        <TextField
          label="Busca por nombre"
          variant="standard"
          name="name"
          onChange={handleSearchNameFilter}
          value={nameFilter}
          sx={{width: '100%'}}
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

            <ul>
                {createElementListJsx()}
            </ul>
        </div>
    )
}

export default ListElementContainer;

