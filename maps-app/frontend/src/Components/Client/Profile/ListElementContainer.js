import React from 'react';
import ListElement from './ListElement';
import { nanoid } from 'nanoid'

function ListElementContainer(props){

    const [nameFilter, setNameFilter] = React.useState("");

    let createElementListJsx = () => {


        
        let arr = props.objs.sort((a, b) => a.name.localeCompare(b.name)).map(element => {
            return( 
                <ListElement key={nanoid()} element={element} handleClickSetMarker={props.handleClickSetMarker} nameFilter={nameFilter}/>
            )
        })
        return arr;
    }

    let handleSearchNameFilter = (event) => {
        let { value } = event.target
        setNameFilter(value)
    }

    return (
        <div>
            <label>
                Busca por nombre:  
                <input value={nameFilter} onChange={handleSearchNameFilter} type="text"></input> <i className="fa-solid fa-magnifying-glass"></i>
            </label>
            <ul>
                {createElementListJsx()}
            </ul>
        </div>
    )
}

export default ListElementContainer;

