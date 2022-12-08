import React from 'react';
import { nanoid } from 'nanoid'

function AddElementForm(props) {

    const [formData, setFormData] = React.useState(
        { _id: nanoid(), name: "Jarfaiter", url: "https://www.youtube.com/watch?v=PlDdt6H-4CE", area: "Cuatro Caminos", description: "Una película de PHOSKIFILMS @phoskifilms", type: "Rap", date: "2010", adminPick: false, lat: props.coordinates.lat, lng: props.coordinates.lng, adminName: props.admin }
    )

    const [disableForm, setDisableForm] = React.useState(false);

    function handleChange(event) {
        let { name, value, type, checked } = event.target
        console.log(formData);
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    let handleSubmit = (e) => {
        e.preventDefault()
        setDisableForm(true);
    }

    return (
        <>
            <h2>Añade un elemento: </h2>
            <form onSubmit={e => handleSubmit(e)}>
                <fieldset disabled={disableForm}>
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
                        <select type="select" required name="type" value={formData.type} onChange={handleChange}>
                            <option value="Rap">Rap</option>
                            <option value="Grupo">Grupo</option>
                            <option value="Colectivo">Colectivo</option>
                            <option value="Dj">Dj</option>
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
                            disabled
                            value={props.coordinates.lat}>
                        </input>

                        <input
                            type="text"
                            name="lng"
                            disabled
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
                </fieldset>
            </form>
        </>
    )
}

export default AddElementForm;

