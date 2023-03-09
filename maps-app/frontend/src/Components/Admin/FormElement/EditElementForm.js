import React from "react";
import {
  Alert,
  Button,
  Typography,
} from "@mui/material";
import { fetchCall } from "../fetchAPI.js";
import FormElement from './FormElement';
import AlertResponse from "../../Alerts/AlertResponse.js";

function EditElementForm(props) {
  const {
    id,
    name,
    url,
    area,
    description,
    type,
    date,
    adminPick,
    lat,
    lng,
    adminName,
  } = props.editMarker;
  let [formData, setFormData] = React.useState({
    id: id,
    name: name,
    url: url,
    area: area,
    description: description,
    type: type,
    date: date,
    adminPick: adminPick,
    lat: lat,
    lng: lng,
    adminName: adminName,
  });

  const [response, setResponse] = React.useState({});

   const handleChange = (event) => {
    let { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const handleSubmit = () => {

  }

  const handleDelete = () => {
    setResponse({ code: "loading" });
    fetchCall("http://localhost:4000/app/deleteElement?id=" + id)
      .then((res) => {
        setResponse(res);
        setTimeout(() => {
          window.location.reload();
        })
      })
      .catch((err) => {
        setResponse(err);
        console.log(err);
      });
  };

  return (
    <>
      <Button size="small" variant="contained" onClick={() => props.handleEditMarker(null)}>
        Volver a crear elemento
      </Button>
      <Typography> <b> Edita un elemento </b> </Typography>
      <label>
          Id: <b>{id}</b>
      </label>

      <FormElement handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} coordinates={{lat: lat, lng: lng}} handleDelete={handleDelete} />
      <AlertResponse response={response} />
    </>
  );
}

export default EditElementForm;
