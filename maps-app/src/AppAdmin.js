import React from 'react';
import MapAdminController from './Components/Admin/MapAdminController'
import { useLoadScript } from "@react-google-maps/api";
import AddElementForm from './Components/Admin/AddElementForm'
import './Styles/Styles.css';


function AppAdmin() {

  const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyA-YCkd4A-zjCH1mDUueq3vjgs1z_GGNks" });
  const [coordinates, setCoordinates] = React.useState({});
  const [allMarkers, setAllMarkers] = React.useState([]);
  const [admin, setAdmin] = React.useState("");


  let handleClickSetCoordinates = (coords) => {
    setCoordinates(coords);
  }

  React.useEffect(() => {
    callApi()
    .then(res => {
      const arr = res.map(element => {
        element.isSelected = false;
        return element;
      })
      setAllMarkers(arr);
    })
    .catch(err => {
      console.log(err)
    });

    setAdmin(prompt("Introduce tu nombre, admin."))

  }, [])

  let callApi = async () => {
    const response = await fetch('http://localhost:4000/app/getAllElements');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

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
                  <MapAdminController handleClickSetCoordinates={handleClickSetCoordinates} objs={allMarkers}/>
                </div>
              </div>
              <div className="add-element-container">
                <AddElementForm coordinates={coordinates} admin={admin} />
              </div>
            </div>
          </main>
        </div>
    );
  }
}

export default AppAdmin;
