import React from 'react';
import InputElm from "./components/inputtext.component";
import SelectElm from "./components/select.component";

const components = {
    text_input: InputElm,
    select: SelectElm,
    basic: ''
};

const CreateComponents = (props) => {
    const TypeComponent = components[props.type.toLowerCase() || 'basic'];
    return (
        <TypeComponent key={`${props.row}${props.col}`} label={props.label} value={props.value} />
    );}

export default CreateComponents;
