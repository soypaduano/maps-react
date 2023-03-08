import React from 'react'
import {LinearProgress, Typography,} from "@mui/material";

function Loading(){
    return (
        <div>
        <Typography variant='h2'>Cargando el mapa...</Typography>
        <LinearProgress color="inherit" sx={{width: '100%'}}/>
      </div>
    )
}

export default Loading;