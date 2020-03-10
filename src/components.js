import React from 'react';
import InputElm from "./components/inputtext.component";
import SelectElm from "./components/select.component";

const components = {
    TEXT_INPUT: InputElm,
    SELECT: SelectElm,
    basic: ''
};
//
// export default block => {
//     // component does exist
//     if (typeof Components[block.component] !== "undefined") {
//         return React.createElement(Components[block.component], {
//             key: block._uid,
//             block: block
//         });
//     }
//     // component doesn't exist yet
//     return React.createElement(
//         () => <div>The component {block.component} has not been created yet.</div>,
//         { key: block._uid }
//     );
// }

function CreateComponents(props) {
    const TypeComponent = components[props.type.toLowerCase() || 'basic'];
    return (
        <TypeComponent label={props.label} value={props.value} />
    );}
