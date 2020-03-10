import React from 'react';

const InputElm = (props) => {
    const {label, value} = props
    return (
        <div>
            <label htmlFor="fname">{label}</label>
            <input type="text" id="fname" name="fname" placeholder={value}/><br></br>
        </div>
    )
}

export default InputElm;
