import React from "react";
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
} from "@mui/material";
import { fetchCall } from "./fetchAPI.js";
const typeOptions = ["Rap", "Grupos", "Dj", "Colectivo"];

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

  console.log(props);

  const [response, setResponse] = React.useState({});
  const coordinateLatRef = React.useRef(null)
  const coordinateLngRef = React.useRef(null)

  function handleChange(event) {
    let { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  let deleteElement = () => {
    setResponse("loading");
    fetchCall("http://localhost:4000/app/deleteElement?id=" + id)
      .then((res) => {
        setResponse(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Button onClick={() => props.handleEditMarker(null)}>
        Volver a crear elemento
      </Button>
      <h2>Edita un elemento: </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      >
        <label>
          Id: <b>{id}</b>
        </label>

        <TextField
          label="Nombre"
          variant="standard"
          required
          onChange={handleChange}
          name="name"
          value={formData.name}
          sx={{ width: "90%" }}
        />

        <TextField
          label="Url"
          variant="standard"
          required
          placeholder="Youtube o Soundcloud"
          onChange={handleChange}
          name="url"
          value={formData.url}
          sx={{ width: "90%" }}
        />

        <TextField
          label="Area"
          variant="standard"
          required
          onChange={handleChange}
          name="area"
          placeholder="Ej: Vallecas"
          value={formData.area}
          sx={{ width: "90%" }}
        />

        <TextField
          label="Date"
          variant="standard"
          required
          onChange={handleChange}
          name="date"
          placeholder="Ej: 2019"
          value={formData.date}
          sx={{ width: "90%", marginBottom: "10px" }}
        />

        <InputLabel id="tipo-label">Tipo</InputLabel>
        <Select
          sx={{ width: "100%" }}
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
          sx={{ width: "100%", marginTop: "5px" }}
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
            value={formData.lat}
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
            value={formData.lng}
          />
        </Box>

        <TextField
          label="Admin Name"
          variant="standard"
          required
          onChange={handleChange}
          name="lng"
          disabled
          value={props.adminName}
        />

        <button className="save" name="edit">
          {" "}
          Editar elemento{" "}
        </button>
      </form>
      <button
        className="delete"
        name="delete"
        onClick={(e) => {
          e.preventDefault();
          deleteElement();
        }}
      >
        {" "}
        Eliminar elemento{" "}
      </button>

      {console.log(response.code)}
      {response.code === "loading" && (
        <p className="loading">
          {" "}
          <span class="loader"></span>{" "}
        </p>
      )}
      {response.code === "200" && (
        <p className="success">
          {" "}
          {response.code}: {response.status}
        </p>
      )}
      {response.code === "0" && (
        <p className="error">
          {" "}
          {response.code}: {response.status}
        </p>
      )}
    </>
  );
}

export default EditElementForm;
