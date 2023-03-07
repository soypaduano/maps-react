import React from 'react';
import { nanoid } from 'nanoid'
import {fetchPost} from './fetchAPI.js'
const typeOptions = ["Rap", "Grupos", "Dj", "Colectivo"]

function AddElementForm(props) {

    const [formData, setFormData] = React.useState({name: undefined, url: undefined, area: undefined, description: undefined, type: "Rap", date: undefined, adminPick: false, adminName: props.admin })
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
        let { value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                "type": value
            }
        })
    }

    let handleSubmit = (e) => {
        e.preventDefault()     
        setResponse({code: "loading"});
        let url = 'http://localhost:4000/app/addMapElement?'
        for (const [key, value] of Object.entries(formData)) {
            url += `${key}=${value}&`
        }
        url += `id=${nanoid()}&`
        url += `lat=${props.coordinates.lat}&`
        url += `lng=${props.coordinates.lng}`
        fetchPost(url)
        .then(response => {
            setResponse(response)
        })
        .catch(err => {
            setResponse(err);
        })
    }

    return (
        <>
            <h2>Añade un elemento: </h2>
            <form onSubmit={e => handleSubmit(e)}>
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
                            className="textarea-form"
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
                            value={props.coordinates.lat}>
                        </input>

                        <input
                            type="text"
                            name="lng"
                            onChange={handleChange}
                            required
                            value={props.coordinates.lng}>
                        </input>
                    </label>

                    <label>
                        Admin Name:
                        <input
                            type="text"
                            name="adminName"
                            disabled
                            value={props.admin}>
                        </input>
                    </label>
                    <button className="save"> Publicar elemento </button>
            </form>
            {response.code === "loading" && <p className="loading"> <span class="loader"></span> </p>}
            {response.code === "200" && <p className="success"> {response.code}: {response.status}</p>}
            {response.code === "0" && <p className="error"> {response.code}: {response.status}</p>}
            
        </>
    )
}

export default AddElementForm;

