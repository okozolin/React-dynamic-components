import React, {useEffect} from 'react';

const SelectElm = React.memo(props => {
    const {label, value} = props
    const selectOptions = value.split(',')

    const MakeItem = (op)=> {
        return <option key={op}>{op}</option>;
    };
    useEffect(() => {
        console.log('rendering SELECT')
        return () => {
            console.log('SELECT destroyed');
        }
    }, [])

    return (
        <div>
            <label htmlFor="fselect">{label}</label>
            <select>{selectOptions.map(MakeItem)}</select>
        </div>
    )
})

export default SelectElm;
