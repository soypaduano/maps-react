import React from "react";
import {FormGroup, FormControlLabel, Checkbox} from '@mui/material';
import {COLORS_TYPE_FILTERS} from '../../../utils/types'

function Filters(props) {

    let filtersApplied = props.filtersApplied;

    const CheckboxFilter = ({ label, value}) => {
        let handleClickCheckboxChanged = (e) => {
            props.handleClickSetFiltersApplied(label, e.target.checked);
        }


        let color = COLORS_TYPE_FILTERS[label];

        return (
            <Checkbox label={label} checked={value} onChange={(e) => handleClickCheckboxChanged(e)} sx={{
                color: color,
                '&.Mui-checked': {
                  color: color,
                },
              }}
      />
        );
    };

    return (
        <div className="filters-container">
            <FormGroup row={true}>
             <FormControlLabel control={<CheckboxFilter value={filtersApplied["Rap"]} label={'Rap'} />} label="Rap" />
             <FormControlLabel control={<CheckboxFilter value={filtersApplied["Grupos"]} label={"Grupos"} />} label="Grupos" />
             <FormControlLabel control={<CheckboxFilter value={filtersApplied["DJ"]} label={"Dj"} />} label="DJ" />
             <FormControlLabel control={<CheckboxFilter value={filtersApplied["Colectivos"]} label={"Colectivos"} />} label="Colectivos" />
             <FormControlLabel control={<CheckboxFilter value={filtersApplied["Productores"]} label={"Productor"} />} label="Productor" />
            </FormGroup>             
        </div>
    )    
}

export default React.memo(Filters, areEqual)


function areEqual(oldProps, nextProps){
    return oldProps !== nextProps ? false : true;
}


