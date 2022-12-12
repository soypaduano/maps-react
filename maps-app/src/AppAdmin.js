import React from 'react';
import MapAdminController from './Components/Admin/MapAdminController'
import { useLoadScript } from "@react-google-maps/api";
import { nanoid } from 'nanoid'
import AddElementForm from './Components/Admin/AddElementForm'
import EditElementForm from './Components/Admin/EditElementForm'
import {fetchCall} from './Components/Admin/fetchAPI.js'
import './Styles/Styles.css';


function AppAdmin() {

  const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyA-YCkd4A-zjCH1mDUueq3vjgs1z_GGNks" });
  const [coordinates, setCoordinates] = React.useState({});
  const [allMarkers, setAllMarkers] = React.useState([]);
  const [admin, setAdmin] = React.useState("");
  const [editMarker, setEditMarker] = React.useState({});


  let handleClickSetCoordinates = (coords) => {
    setCoordinates(coords);
  }

  let handleEditMarker = (id) => {
    let copyElement = allMarkers.find(x => x.id === id)
    let element = { ...copyElement };
    setEditMarker(element);
  }

  React.useEffect(() => {
    fetchCall('http://localhost:4000/app/getAllElements')
    .then(res => {
      setAllMarkers(res);
    })
    .catch(err => {
      console.log(err)
    });

    //setAdmin(prompt("Introduce tu nombre, admin."))
    setAdmin("Padu")

  }, [])


  if (!isLoaded) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    )
  } else {
    return (
        <div className="App">
          <main>
            <div className="content-container">
              <div className="map-container">
                <div className="map-element-container admin">
                  <MapAdminController handleClickSetCoordinates={handleClickSetCoordinates} handleEditMarker={handleEditMarker}  objs={allMarkers}/>
                </div>
              </div>
              <div className="add-element-container">
                {editMarker.id === undefined && <AddElementForm coordinates={coordinates} admin={admin} />}
                {editMarker.id !== undefined && <EditElementForm key={nanoid()}  editMarker={editMarker}/>}
              </div>
            </div>
          </main>
        </div>
    );
  }
}

export default AppAdmin;
