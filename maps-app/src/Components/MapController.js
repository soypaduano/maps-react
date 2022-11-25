import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import MarkerComponent from "./MarkerComponent";
import { nanoid } from 'nanoid'
import React from 'react';

function MapController(props){

    const coord = { lat: 40.41988, lng: -3.688780372508718 }

    let [selectedMarker, setSelectedMarker] = React.useState({});

    let handleClickSetMarker = (id, setMarkerSelectedFromMarker) => {
        let element = objs.find(x => x.id === id)
        element.changeStateSelected = setMarkerSelectedFromMarker;
        element.changeStateSelected(true);
        setSelectedMarker(oldMarker => {
            if(oldMarker.id) oldMarker.changeStateSelected(false);
            return element;
        })
    }
    
    let getLatLon = (ev) => {
        let lat = ev.latLng.lat();
        let lng = ev.latLng.lng();
        console.log("latitide = ", ev.latLng.lat());
        console.log("longitude = ", ev.latLng.lng());
        let stringCoords = {
            lat: ev.latLng.lat(),
            lon: ev.latLng.lng()
        }
        navigator.clipboard.writeText(JSON.stringify(stringCoords));
    }

    return (<GoogleMap id="map" zoom={12} mapTypeId='satellite' center={coord} mapContainerClassName={"map"} onClick={ev => { getLatLon(ev) }}>
        {console.log("rendering MAPS")}
      {objs.map(element => {
          {console.log("rendering MARKER COMPONENT WITH ID " + element.id)}
          return <MarkerComponent key={element.id} id={element.id} obj={element} handleClick={handleClickSetMarker} />            
      })}
    </GoogleMap>
    )
}

export default React.memo(MapController);



let objs = [
    {
        id:"1",
        coord: {
            lat: 40.45739331889076,
            lon: -3.6577911834592647
        },
        name: "Supreme P",
        description: "Rapero de Ciudad Lineal to potente",
        date: 2016,
        url: "https://www.youtube.com/watch?v=rU_Eb6PrBy0",
        type: "Rapero"
    },
    {
        id:"2",
        coord: {
            lat: 40.40326753630597,
            lon: -3.608905901127548
        },
        name: "Chirie Vegas",
        description: "Rapero de Ciudad Lineal to potente",
        date: 2002,
        url: "https://www.youtube.com/watch?v=JpnIQpsbyf4",
        type: "Rapero"
    },
    {
        id:"3",
        coord: {
            lat: 40.43970899649083,
            lon: -3.6371102980458225
        },
        name: "Alcala Norte",
        description: "Grupo de Ciudad Lineal to potente",
        date: 2020,
        url: "https://www.youtube.com/watch?v=2_NRwvX3EDA",
        type: "Grupo"
    },
    {
        id:"4",
        coord: {
            lat: 40.44405219668206,
            lon: -3.674522135423386
        },
        name: "Dionaldo",
        description: "DJ Folleti de la prospe to potente",
        date: 2018,
        url: "https://soundcloud.com/chebdionaldo",
        type: "DJ"
    },
    {
        id:"5",
        coord: {
            
            lat: 40.39313242131439,
            lon: -3.7081902361322583,
        },
        name: "Radio Relativa",
        description: "Colectivo de radio",
        date: 2015,
        adminPick: true,
        url: "https://www.mixcloud.com/relativa/stream/",
        type: "Colectivo"
    },
    {
        id:"6",
        coord: {

            lat: 40.453420076653266,
            lon: -3.662182283157658
        },
        name: "Andreu Slim",
        description: "Rapero de Av de la paz to potente",
        date: 2019,
        url: "https://www.youtube.com/watch?v=RJxAEV8ESrk",
        type: "Rapero"
    },
    {
        id:"7",
        coord: {
            lat: 40.42968743332664,
            lon: -3.706135216791322
        },
        name: "28 Minimal",
        description: "Tengo una hierba que te peta la cabeza",
        date: 2012,
        adminPick: true,
        url: "https://www.youtube.com/watch?v=X__5vq6J0dk&list=TLPQMjMxMTIwMjK78ZAUUpyvsw&index=4",
        type: "Rapero"
    },
]


 /*
        Toda la logica de añadir un PIN la dejaremos en la parte del Admin
    
    const [locations, setLocations] = React.useState([])
    let getLoc = (ev => {
      let lat = ev.latLng.lat();
      let lng = ev.latLng.lng();
      console.log("latitide = ", ev.latLng.lat());
      console.log("longitude = ", ev.latLng.lng());
  
      let obj = new Pin(lat, lng);
      setLocations(oldElements => {
        console.log(oldElements);
        return [...oldElements, obj];
      })
    });
  
    React.useEffect(() => {
      if (locations.length == 0) {
        setLocations(oldElements => {
          return [...oldElements, testObj];
        })
      }
      console.log(locations.length)
    }, [])

*/