import './Styles/Styles.css';
import React from 'react';
import { useLoadScript } from "@react-google-maps/api";
import Profile from './Components/Client/Profile/Profile';
import MapController from './Components/Client/Map/MapController'
import Filters from './Components/Client/Filters/Filters'
import ErrorBoundary from './Components/ErrorBoundary';
import Header from './Components/Client/Header/Header'
import callApi from './utils/fetchUtil.js'

function App() {

  const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyA-YCkd4A-zjCH1mDUueq3vjgs1z_GGNks" });

  const [selectedMarker, setSelectedMarker] = React.useState({});
  const [allMarkers, setAllMarkers] = React.useState([]);

  let [filtersApplied, setFiltersApplied] = React.useState({
    'Rap': true,
    'Grupos': true,
    'DJ': true,
    'Colectivos': true
  });


  let handleClickSetMarker = (id) => {
    if (id == null) setSelectedMarker({})
    let copyElement = allMarkers.find(x => x.id === id)
    let element = { ...copyElement };
    setSelectedMarker(oldMarker => {
      element.isSelected = true;
      return { ...element, isSelected: true };
    })
  }

  let handleClickSetFiltersApplied = (key, value) => {
    setFiltersApplied(oldFiltersApplied => {
      return { ...oldFiltersApplied, [key]: value };
    })
  }




  React.useEffect(() => {
    callApi().then(res => {
        const arr = res.map(element => {
          element.isSelected = false;
          return element;
        })
        setAllMarkers(arr);
      }).catch(err => {
        throw Error(err);
      });
  }, [])

  if (!isLoaded) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    )
  }  
  
  {
    return (
      <div className="App">
        <main>
          <ErrorBoundary>
            <div className="content-container">
              <div className="map-container">
                <Header />
                <div className="map-element-container">
                  <MapController handleClickSetMarker={handleClickSetMarker} objs={allMarkers} selectedMarker={selectedMarker} filters={filtersApplied} />
                  <Filters handleClickSetFiltersApplied={handleClickSetFiltersApplied} filtersApplied={filtersApplied} />
                </div>
              </div>
              <div className="profile-container">
                {<Profile markerSelected={selectedMarker} objs={allMarkers} handleClickSetMarker={handleClickSetMarker} />}
              </div>
            </div>
          </ErrorBoundary>
        </main>
      </div>
    );
  }
}


export default App;
