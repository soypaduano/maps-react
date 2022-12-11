import React from 'react';
import ListElement from './ListElement';
import { nanoid } from 'nanoid'

function ListElementContainer(props){

    let createElementListJsx = () => {
        let arr = props.objs.map(element => {
            return( 
                <ListElement key={nanoid()} element={element} handleClickSetMarker={props.handleClickSetMarker} />
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

