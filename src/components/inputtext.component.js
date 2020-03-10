import React, {useEffect} from 'react';

const InputElm = React.memo(props => {
    const {label, value} = props
    useEffect(() => {
        console.log('rendering INPUT_TEXT')
        return () => {
            console.log('INPUT_TEXT destroyed');
        }
    }, [])
    return (
        <div>
            <label htmlFor="fname">{label}</label>
            <input type="text" id="fname" name="fname" placeholder={value}/><br></br>
        </div>
    )
})

export default InputElm;
