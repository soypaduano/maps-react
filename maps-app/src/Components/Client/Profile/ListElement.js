import React from 'react';

function ListElement(props){
    let {id, name, type, area} = props.element;
    let filterName = props.nameFilter;
    let show = true;

    show = name.includes(filterName) ? true : false;

    if(show){
        return (
            <li onClick={() => {
                props.handleClickSetMarker(id);
            }}> 
                <p> {name} </p>
                <span> {type} - {area}</span>
            </li>
        )
    }
}

export default ListElement;

