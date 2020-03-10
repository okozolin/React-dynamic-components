import React from 'react';
import InputElm from "./components/inputtext.component";
import SelectElm from "./components/select.component";

const BasicElm = () => {
    return React.createElement(
        () => <div>Unknown component</div>
    );
}

const components = {
    text_input: InputElm,
    select: SelectElm,
    basic: BasicElm
};

const CreateComponents = (props) => {
    // check for valid type of component
    let type = props.type ? props.type.toLowerCase() : null;
    type = (typeof components[type] != "undefined") ? type : 'basic'
    const TypeComponent = components[type];
    return (
        <TypeComponent key={`${props.row}${props.col}`} label={props.label} value={props.value} />
    );}

export default CreateComponents;
