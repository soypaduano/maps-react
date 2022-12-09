import React from 'react';
import { nanoid } from 'nanoid'


function AddElementForm(props) {

    const [formData, setFormData] = React.useState(
        { id: nanoid(), name: "", url: "", area: "", description: "", type: "Rap", date: "", adminPick: false, lat: props.coordinates.lat, lng: props.coordinates.lng, adminName: props.admin }
    )
    const [response, setResponse] = React.useState({});

    const typeOptions = ["Rap", "Grupos", "Dj", "Colectivo"]

    function handleChange(event) {
        let { name, value, type, checked } = event.target
        console.log(event.target)
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
        console.log(formData)
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
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };

        let url = 'http://localhost:4000/app/addMapElement?'

        for (const [key, value] of Object.entries(formData)) {
            url += `${key}=${value}&`
        }

        fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            setResponse(data)
        })
        .catch(err => {
            console.log("Ha habido un error")
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
                            required
                            value={props.coordinates.lat}>
                        </input>

                        <input
                            type="text"
                            name="lng"
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
                    <button> Publicar elemento </button>
            </form>

            {response.code && <p className={response.code === "200" ? 'success' : 'error'}>{response.code}: {response.status}</p>}
        </>
    )
}

export default AddElementForm;

