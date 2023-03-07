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
             <Checkbox label="Rap" value={filtersApplied["Rap"]} />
             <Checkbox label="Grupos" value={filtersApplied["Grupos"]}/>
             <Checkbox label="DJ" value={filtersApplied["DJ"]}/>
             <Checkbox label="Colectivos" value={filtersApplied["Colectivos"]}/>
        </div>
    )    
}

export default React.memo(Filters, areEqual)


function areEqual(oldProps, nextProps){
    return oldProps !== nextProps ? false : true;
}


