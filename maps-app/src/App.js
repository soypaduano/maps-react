import './Styles.css';
import React from 'react';
import { useLoadScript} from "@react-google-maps/api";
import Profile from './Components/Profile.js';
import MapController from './Components/MapController.js'
import objData from './Data/data.js'

function App() {

  const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyA-YCkd4A-zjCH1mDUueq3vjgs1z_GGNks" });

  let [selectedMarker, setSelectedMarker] = React.useState({});


  let handleClickSetMarker = (id) => {

    let copyElement = objData.objs.find(x => x.id === id)
    let element = { ...copyElement };
    setSelectedMarker(oldMarker => {
      element.isSelected = true;
      return { ...element, isSelected: true };
    })
  }

  React.useEffect(() => {
    objData.objs = objData.objs.map(element => {
      element.isSelected = false;
      return element;
    })

  }, [])

  if (!isLoaded) {
    return (
      <div>
        <h1>Cargando...</h1>
      <div className="m-scroll">
        <div className="m-scroll__title">
          <div>
            <h2>
              <p> &nbsp; M30 Club es un proyecto creado por un grupo de personas apasionadas por la música y por Madrid. M30 Club documenta todos los artistas de distintos géneros geolocalizados. </p>&nbsp;
            </h2>
            <h2>
              <p> &nbsp; M30 Club es un proyecto creado por un grupo de personas apasionadas por la música y por Madrid. M30 Club documenta todos los artistas de distintos géneros geolocalizados. </p>&nbsp;
            </h2>
          </div>
        </div>
      </div>
    </div>
    )
  } else {
    return (
      <div className="App">
        <main>


          <div className="content-container">
            <div className="map-title-container">
              <div>
                <div className="m-scroll">
                  <div className="m-scroll__title">
                    <div>
                      <h2>
                        <p> &nbsp; M30 Club es un proyecto creado por un grupo de personas apasionadas por la música y por Madrid. M30 Club documenta todos los artistas de distintos géneros geolocalizados.</p>&nbsp;
                      </h2>
                      <h2>
                        <p> &nbsp; M30 Club es un proyecto creado por un grupo de personas apasionadas por la música y por Madrid. M30 Club documenta todos los artistas de distintos géneros geolocalizados. </p>&nbsp;
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="map-container">
                <MapController handleClickSetMarker={handleClickSetMarker} objs={objData} selectedMarker={selectedMarker} />
              </div>
            </div>

            <div className="profile-container">
              {<Profile markerSelected={selectedMarker} />}
            </div>

          </div>
        </main>
      </div>
    );
  }
}


export default App;
