import React from 'react';
import MapAdminController from './Components/Admin/MapAdminController'
import { useLoadScript } from "@react-google-maps/api";
import AddElementForm from './Components/Admin/AddElementForm'
import './Styles/Styles.css';


function AppAdmin() {

  const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyA-YCkd4A-zjCH1mDUueq3vjgs1z_GGNks" });
  const [coordinates, setCoordinates] = React.useState({});
  const admin = "Padu"


  let handleClickSetCoordinates = (coords) => {
    setCoordinates(coords);
  }

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
                  <MapAdminController handleClickSetCoordinates={handleClickSetCoordinates}/>
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
