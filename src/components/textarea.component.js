import React, {useContext, useState} from 'react';
import {ItemsContext} from "../App";

const TextAreaElem = (props => {
    const {label} = props
    // used to pass state from child to parent  - pass UI text instructions
    const [items, setItems] = useContext(ItemsContext)
    const [gridText, setGridText] = useState('')

    const handleChange = (e) => {
        setGridText(e.target.value)
    }

    const handleGridTextChange = (e) => {
        setItems(gridText)
        // setGridText('')
    }
    return (
        <div>
            <label htmlFor="ftext">{ label }</label>
            <textarea id="ftext"
                      rows="8"
                      cols="50"
                      defaultValue={ items }
                      onChange={ handleChange }
            />
            <button onClick={ handleGridTextChange }>Generate Elements</button>
        </div>
    )
})

export default TextAreaElem;
