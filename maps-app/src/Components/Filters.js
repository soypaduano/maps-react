import React from "react";

function Filters(props) {

    let filtersApplied = props.filtersApplied;

    const Checkbox = ({ label, value}) => {

        let handleClickCheckboxChanged = (e) => {
            props.handleClickSetFiltersApplied(label, e.target.checked);
        }

        return (
            <label>
                <input type="checkbox" checked={value} onChange={(e) => handleClickCheckboxChanged(e)} />
                {label}
            </label>
        );
    };

    return (
        <div className="filters-container">
             {console.log("rendering filter container")}
             <Checkbox label="Raperos" value={props.filtersApplied["Raperos"]} />
             <Checkbox label="Grupos" value={props.filtersApplied["Grupos"]}/>
             <Checkbox label="DJ" value={props.filtersApplied["DJ"]}/>
             <Checkbox label="Colectivos" value={props.filtersApplied["Colectivos"]}/>
        </div>
    )    
}

export default React.memo(Filters, areEqual)


function areEqual(oldProps, nextProps){
    return oldProps != nextProps ? false : true;
}


