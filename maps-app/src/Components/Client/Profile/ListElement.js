import React from 'react';

function ListElement(props){
    let {id, name, type} = props.element;
    let filterName = props.nameFilter;
    let show = true;

    show = name.includes(filterName) ? true : false;

    if(show){
        return (
            <li onClick={() => {
                props.handleClickSetMarker(id);
            }}> 
                <p> {name} </p>
                <span> {type}</span>
            </li>
        )
    }
    
}

export default ListElement;

