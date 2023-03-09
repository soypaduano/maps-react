
import React from 'react'
import {Alert, AlertTitle, LinearProgress} from "@mui/material";

function AlertResponse(props){
    const {response} = props;
    return (
        <>
        {response.code === "loading" && <LinearProgress />}
        {response.code === "200" && (
        <Alert severity="success">
          <AlertTitle>Bien!</AlertTitle>
          <strong>{response.response}</strong>
        </Alert>
      )}
      {response.code === "0" && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          <strong>{response.response}</strong>
        </Alert>
      )}
        </>
    )
}

export default AlertResponse;





