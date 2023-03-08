import React from 'react';
import MapAdminController from './Components/Admin/MapAdminController'
import { useLoadScript } from "@react-google-maps/api";
import { nanoid } from 'nanoid'
import AddElementForm from './Components/Admin/AddElementForm'
import EditElementForm from './Components/Admin/EditElementForm'
import callApi from "./utils/fetchUtil.js";
import './Styles/Styles.css';
import Loading from './Components/Loading/Loading';


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
    if (id == null) setEditMarker({})
    let copyElement = allMarkers.find(x => x.id === id)
    let element = { ...copyElement };
    setEditMarker(oldMarker => {
      element.isSelected = true;
      return { ...element, isSelected: true };
    })
  }

  React.useEffect(() => {
    callApi('http://localhost:4000/app/getAllElements')
    .then(res => {
      setAllMarkers(res);
    })
    .catch(err => {
      console.log(err)
    });

    setAdmin("Padu")

  }, [])


  if (true) {
    return (
      <Loading />
    )
  } 

  return (
        <div className="App">
          <main>
            <div className="content-container">
              <div className="map-container">
                <div className="map-element-container admin">
                  <MapAdminController handleClickSetCoordinates={handleClickSetCoordinates} handleEditMarker={handleEditMarker}  objs={allMarkers} editMarker={editMarker}/>
                </div>
              </div>
              <div className="add-element-container">
                {editMarker.id === undefined && <AddElementForm coordinates={coordinates} admin={admin} />}
                {editMarker.id !== undefined && <EditElementForm key={nanoid()}  editMarker={editMarker} handleEditMarker={handleEditMarker}/>}
              </div>
            </div>
          </main>
        </div>
    );
  }

export default AppAdmin;
