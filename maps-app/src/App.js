import logo from './logo.svg';
import './App.css';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";




function Map() {
  const coord = {lat: 40.41988,lng: -3.688780372508718}
  return <GoogleMap id="map" zoom={12} center={coord} mapContainerClassName={"map"}> </GoogleMap>
}

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
            <h1>By Padu</h1>
          </div>
          <div className="map-container">
            <Map />
          </div>
        </main>
      </div>
    );
  }
}


export default App;
