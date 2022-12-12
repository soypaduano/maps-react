import React from 'react';
import {fetchCall} from './fetchAPI.js'
const typeOptions = ["Rap", "Grupos", "Dj", "Colectivo"]

function EditElementForm(props) {
    const { id, name, url, area, description, type, date, adminPick, lat, lng, adminName } = props.editMarker;
    let [formData, setFormData] = React.useState({ id: id, name: name, url: url, area: area, description: description, type: type, date: date, adminPick: adminPick, lat: lat, lng: lng, adminName: adminName })
    const [response, setResponse] = React.useState({});

    function handleChange(event) {
        let { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    let handleChangeSelect = (event) => {
        let { value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                "type": value
            }
        })
    }

    let deleteElement = () => {
        setResponse("loading");
        fetchCall('http://localhost:4000/app/deleteElement?id=' + id)
            .then(res => {
                setResponse(res)
            })
            .catch(err => {
                console.log(err)
            });
    }

    return (
        <>
            <h2>Edita un elemento: </h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(e);
            }}>
                <label>
                    Id: <b>{id}</b>
                </label>
                <label>
                    Nombre*:
                    <input
                        type="text"
                        required
                        onChange={handleChange}
                        name="name"
                        value={formData.name}>
                    </input>
                </label>

                <label>
                    Url (Youtube y Soundcloud)*
                    <input
                        type="text"
                        required
                        onChange={handleChange}
                        name="url"
                        value={formData.url}>
                    </input>
                </label>

                <label>
                    Area / Zona*:
                    <input
                        type="text"
                        required
                        onChange={handleChange}
                        name="area"
                        placeholder="Pon un barrio. Ej: Quintana"
                        value={formData.area}>
                    </input>
                </label>

                <label>
                    Type*:
                    <select
                        required
                        name="type"
                        value={formData.type}
                        onChange={handleChangeSelect}>
                        {typeOptions.map(o => (
                            <option key={o} value={o}>{o}</option>
                        ))}
                    </select>
                </label>

                <label>
                    Description:
                    <textarea
                        onChange={handleChange}
                        name="description"
                        placeholder="Describe el artista o pilla una descripción de internet"
                        value={formData.description}>
                    </textarea>
                </label>

                <label>
                    Date:
                    <input
                        type="text"
                        onChange={handleChange}
                        name="date"
                        placeholder="Ej: 2019"
                        value={formData.date}>
                    </input>
                </label>


                <label style={{ "display": "flex", "alignItems": "center" }}>
                    Admin Pick
                    <input
                        type="checkbox"
                        onChange={handleChange}
                        name="adminPick"
                        style={{ "width": "20%" }}
                        value={formData.adminPick}>
                    </input>
                </label>

                <label style={{ "display": "flex", "alignItems": "center" }}>
                    Coordinates
                    <input
                        type="text"
                        name="lat"
                        onChange={handleChange}
                        required
                        value={formData.lat}>
                    </input>

                    <input
                        type="text"
                        name="lng"
                        onChange={handleChange}
                        required
                        value={formData.lng}>
                    </input>
                </label>

                <label>
                    Admin Name:
                    <input
                        type="text"
                        name="adminName"
                        disabled
                        value={formData.adminName}>
                    </input>
                </label>
                <button name="edit"> Editar elemento </button>
            </form>
            <button className="delete" name="delete" onClick={(e) => {
                e.preventDefault();
                deleteElement();
            }}> Eliminar elemento </button>
            
            {console.log(response.code)}
            {response.code === "loading" && <p className="loading"> <span class="loader"></span> </p>}
            {response.code === "200" && <p className="success"> {response.code}: {response.status}</p>}
            {response.code === "0" && <p className="error"> {response.code}: {response.status}</p>}

        </>
    )
}

export default EditElementForm;

