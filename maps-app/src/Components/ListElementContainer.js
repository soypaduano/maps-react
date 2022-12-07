import React from 'react';
import ListElement from './ListElement';

function ListElementContainer(props){

    let createElementListJsx = () => {
        let arr = props.objs.objs.map(element => {
            return( 
                <ListElement element={element} handleClickSetMarker={props.handleClickSetMarker} />
            )
        })
        return arr;
    }

    return (
        <div>
            <ul>
                {createElementListJsx()}
            </ul>
        </div>
    )
}

export default ListElementContainer;

