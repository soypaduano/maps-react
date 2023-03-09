import React, { useRef } from "react";
import { nanoid } from "nanoid";
import { fetchPost } from "../fetchAPI.js";
import {
  Button,
  Alert,
  AlertTitle,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControlLabel,
  Checkbox,
  LinearProgress,
  Box,
  Typography
} from "@mui/material";

import {typeOptions} from "../../../utils/types.js";

function AddElementForm(props) {
  const [formData, setFormData] = React.useState({
    name: undefined,
    url: undefined,
    area: undefined,
    description: undefined,
    type: "Rap",
    date: undefined,
    adminPick: false,
    adminName: props.admin,
  });
  const [response, setResponse] = React.useState({});
  const coordinateLatRef = useRef(null);
  const coordinateLngRef = useRef(null);


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
    coordinateLatRef.current.value = 40.425107321040706;
    coordinateLngRef.current.value = 3.6172404936634983;
  };

  React.useEffect(() => {
    coordinateLatRef.current.value = 5
    coordinateLngRef.current.value = 5
}, [])

  return (
    <>
      <Button onClick={() => setTestForm()}>Fill all the data</Button>
      <form onSubmit={(e) => handleSubmit(e)}>
      <Typography><b> Rellena todos los datos </b> para subir un artista a la base de datos</Typography>
        <TextField
          label="Nombre"
          variant="standard"
          required
          onChange={handleChange}
          name="name"
          value={formData.name}
          sx={{width: '90%'}}
        />
        <TextField
          label="Url"
          variant="standard"
          required
          placeholder="Youtube o Soundcloud"
          onChange={handleChange}
          name="url"
          value={formData.url}
          sx={{width: '90%'}}
        />

        <TextField
          label="Area"
          variant="standard"
          required
          onChange={handleChange}
          name="area"
          placeholder="Ej: Vallecas"
          value={formData.area}
          sx={{width: '90%'}}
        />

        <TextField
          label="Date"
          variant="standard"
          required
          onChange={handleChange}
          name="date"
          placeholder="Ej: 2019"
          value={formData.date}
          sx={{width: '90%', marginBottom: '10px'}}
        />

        <InputLabel id="tipo-label">Tipo</InputLabel>
        <Select
          sx={{width: '100%'}}
          labelId="tipo-label"
          id="demo-simple-select"
          name="type"
          value={formData.type}
          label="Tipo"
          onChange={handleChange}
        >
          {typeOptions.map((o) => (
            <MenuItem key={o} value={o}>
              {o}
            </MenuItem>
          ))}
        </Select>

        <TextField
          placeholder="Escribe una descripcion sobre el artista o pillala de internet"
          multiline
          label="Descripcion"
          name="description"
          rows={3}
          value={formData.description}
          onChange={handleChange}
          sx={{width: '100%', marginTop: '5px'}}
        />

        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              onChange={handleChange}
              name="adminPick"
              value={formData.adminPick}
            />
          }
          label="Admin Pick"
        />

        <Box sx={{ display: "flex", flexDirection: "row", margin: "10px" }}>
          <TextField
            label="Latitude"
            variant="standard"
            required
            disabled
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
            name="lat"
            ref={coordinateLatRef}
            value={props.coordinates.lat}
          />

          <TextField
            label="Longitude"
            variant="standard"
            required
            InputLabelProps={{ shrink: true }}
            disabled
            onChange={handleChange}
            name="lng"
            ref={coordinateLngRef}
            value={props.coordinates.lng}
          />
        </Box>

        <TextField
          label="Admin Name"
          variant="standard"
          required
          onChange={handleChange}
          name="lng"
          disabled
          value={props.admin}
        />

        <Button type="submit"> Publicar elemento </Button>
      </form>

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
  );
}

export default AddElementForm;
