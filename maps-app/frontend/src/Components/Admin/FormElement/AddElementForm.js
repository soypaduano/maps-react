import React from "react";
import { nanoid } from "nanoid";
import { fetchPost } from "../fetchAPI.js";
import {
  Button,
  Typography,
} from "@mui/material";
import FormElement from './FormElement';
import AlertResponse from "../../Alerts/AlertResponse";

function AddElementForm(props) {

  const {admin, coordinates} = props;

  const [formData, setFormData] = React.useState({
    name: undefined,
    url: undefined,
    area: undefined,
    description: undefined,
    type: "Rap",
    date: undefined,
    adminPick: false,
    adminName: admin,
  });

  const [response, setResponse] = React.useState({});


  function handleChange(event) {
    let { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    setResponse({ code: "loading" });
    let url = "http://localhost:4000/app/addMapElement?";
    for (const [key, value] of Object.entries(formData)) {
      url += `${key}=${value}&`;
    }
    url += `id=${nanoid()}&`;
    url += `lat=${props.coordinates.lat}&`;
    url += `lng=${props.coordinates.lng}`;
    fetchPost(url)
      .then((response) => {
        setResponse(response);
        setTimeout(() => window.location.reload(), 3000)
      })
      .catch((err) => {
        err.code ? setResponse(err) : setResponse({code: '0', response: 'El backend esta caido'})
      });
  };

  let setTestForm = () => {
    setFormData({
      name: nanoid().toString(),
      url: nanoid().toString(),
      area: "Barrio 1",
      description: "Descripcion 1",
      type: "Rap",
      date: "2019",
      adminPick: true,
      adminName: props.admin,
    });
  };

  return (
    <>
      <Button size="small" variant="contained" onClick={() => setTestForm()}>Fill all the data</Button>
      <Typography><b> Rellena todos los datos </b> para subir un artista a la base de datos</Typography>
      <FormElement handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} coordinates={coordinates} />
      <AlertResponse response={response} />
    </>
  );
}

export default AddElementForm;
