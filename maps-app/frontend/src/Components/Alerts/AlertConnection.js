import React from 'react'
import {Alert, AlertTitle} from "@mui/material";

function AlertConnection(props){
    return (
        <>
        {(props.show) &&
                  <Alert severity="error">
                  <AlertTitle>Hay un error con los datos</AlertTitle>
                    El backend esta caido, los datos mostrados son locales  — <strong> Revisar el backend!</strong>
                  </Alert>
        }
        </>
    )
}

export default AlertConnection;