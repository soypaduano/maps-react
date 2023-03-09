import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Box,
  Button
} from "@mui/material";
import { typeOptions } from "../../../utils/types";

const FormElement = (props) => {

    const {handleSubmit, handleChange, formData, handleDelete, coordinates} = props;
    const coordinateLatRef = React.useRef(null);
    const coordinateLngRef = React.useRef(null);

    console.log(formData)
    console.log(formData)
    console.log(formData)
    console.log(formData)
    console.log(formData)
    console.log(formData)

  return (
    <>
    <form onSubmit={(e) => handleSubmit(e)}>
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
            value={coordinates.lat}
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
            value={coordinates.lng}
          />
        </Box>

        <TextField
          label="Admin Name"
          variant="standard"
          required
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          name="lng"
          disabled
          value={formData.adminName}
        />

        <Button variant="contained" color={'success'} type="submit"> Publicar elemento </Button>
        {handleDelete && <Button color={'error'} variant="contained" name="delete" onClick={(e) => {
            e.preventDefault()
            handleDelete();
            }}> Eliminar elemento </Button>}
      </form>
    </>
  );
};

export default FormElement;
