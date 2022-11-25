import './Styles.css';
import React from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Profile } from './Components/Profile.js';
import MapController from './Components/MapController.js'



function App() {

  const apiKey = 'AIzaSyA-YCkd4A-zjCH1mDUueq3vjgs1z_GGNks';
  const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyA-YCkd4A-zjCH1mDUueq3vjgs1z_GGNks" });

  if (!isLoaded) {
    return (
      <h1>Loading...</h1>
    )
  } else {
    return (
      <div className="App">
        <main>

          <div>
            <h1>M30 CLUB</h1>
          </div>

          <div className="content-container">
            <div className="map-container">
              <MapController />
            </div>
            <div className="profile-container">
              {/*<Profile markerSelected={markerSelected} />*/}
            </div>
          </div>
        </main>
      </div>
    );
  }
}


export default App;
