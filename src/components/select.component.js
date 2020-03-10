import React from 'react';

const SelectElm = (props) => {
    const {label, value} = props
    const selectOptions = value.split(',')
    console.log('selectOptions', selectOptions)

    const MakeItem = (op)=> {
        return <option key={op}>{op}</option>;
    };

    return (
        <div>
            <label htmlFor="fselect">{label}</label>
            <select>{selectOptions.map(MakeItem)}</select>
        </div>
    )
}


export default SelectElm;
