import React from "react";



const Checkbox = ({ label, value, onChange }) => {
    return (
        <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
        </label>
    );
};

//handleClickSetFiltersApplied={handleClickSetFiltersApplied} filtersApplied={filtersApplied} 
export function Filters(props) {

    const handleChange = (filter) => {
        props.handleClickSetFiltersApplied();
    };

    return (
        <div className="filters-container">
             <Checkbox label="Raperos"/>
             <Checkbox label="Grupos"/>
             <Checkbox label="DJ"/>
             <Checkbox label="Colectivos"/>
        </div>
    )    
}


