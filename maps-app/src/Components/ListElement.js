import React from 'react';

function ListElement(props){
    let {id, name, type} = props.element;

    return (
        <li onClick={() => {
            props.handleClickSetMarker(id);
        }}> 
            <p> {name} </p>
            <span> {type}</span>
        </li>
    )
}

export default ListElement;

