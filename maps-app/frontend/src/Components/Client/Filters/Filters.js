import React from "react";
import {FormGroup, FormControlLabel, Checkbox} from '@mui/material';
import { red } from '@mui/material/colors';

function Filters(props) {

    let filtersApplied = props.filtersApplied;

    console.log(filtersApplied);

    const CheckboxFilter = ({ label, value}) => {
        console.log('***');
        console.log(label, value);
        let handleClickCheckboxChanged = (e) => {
            props.handleClickSetFiltersApplied(label, e.target.checked);
        }

        return (
            <Checkbox label="Rap" checked={value} onChange={(e) => handleClickCheckboxChanged(e)} sx={{
                color: red[800],
                '&.Mui-checked': {
                  color: red[600],
                },
              }}
      />
        );
    };

    return (
        <div className="filters-container">
            <FormGroup row={true}>
             <FormControlLabel control={<CheckboxFilter value={filtersApplied["Rap"]} label={'Rap'} />} label="Rap" />
             <FormControlLabel control={<CheckboxFilter value={filtersApplied["Grupos"]} label="Grupos" />} label="Grupos" />
             <FormControlLabel control={<CheckboxFilter value={filtersApplied["DJ"]} label="DJ" />} label="DJ" />
             <FormControlLabel control={<CheckboxFilter value={filtersApplied["Colectivos"]} label="Colectivos" />} label="Colectivos" />
             <FormControlLabel control={<CheckboxFilter value={filtersApplied["Productores"]} label="Productores" />} label="Productores" />
            </FormGroup>             
        </div>
    )    
}

export default React.memo(Filters, areEqual)


function areEqual(oldProps, nextProps){
    return oldProps !== nextProps ? false : true;
}


