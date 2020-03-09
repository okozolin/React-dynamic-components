import React, {useContext, useState} from 'react';
import './App.css';

export const ItemsContext = React.createContext();

function App() {
    let elements = [];

    const uiGrid = `
2;1;gender;SELECT;Male,Female
1;1;First Name;TEXT_INPUT;Enter your first name
2;2;marital status;SELECT;Single,MAried,Divorced
1;2;Last Name;TEXT_INPUT;Enter your last name
  `
    const [uiGridText, setUiGridText] = useState(uiGrid)

    const parseElements = (uiGrid) => {
        //remove any white spaces at the start and split to rows
        const elemArr = uiGrid.trim().split('\n')
        for (const elm of elemArr ) {
          elements.push(elm.split(';'))
        }
        // sort the array by row (first element) in ascending order
        elements.sort(function(a, b) {
          return a[0] - b[0];
        });
        console.log("elements", elements)
    }

    // Elements Components
    // ---------------------------------
    //
    // Text Area element component
  const TextAreaElem = (props => {
      const {label} = props
      // used to pass state from child to parent  - pass UI text instructions
      const [items, setItems] = useContext(ItemsContext)
      const [gridText, setGridText] = useState('')

      const handleChange = (e) => {
          setGridText(e.target.value)
      }

      const handleGridTextChange = (e) => {
          console.log("I was cliked")
          console.log("items", items)
          console.log("gridText",gridText)
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

  // Input element component
  const InputElm = (props) => {
    const {label, value} = props
    return (
        <div>
          <label htmlFor="fname">{label}</label>
          <input type="text" id="fname" name="fname" placeholder={value}/><br></br>
        </div>
    )
  }

  // Select element component
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
  // ---------------------------------------------

  return (
      <div className="App">
        Hello Orit
          <div id="grid_text_container">
              <ItemsContext.Provider value={[uiGridText, setUiGridText]}>
                  <TextAreaElem/>
              </ItemsContext.Provider>
          </div>
          {parseElements(uiGridText)}
          <div id="elements_container">
              <InputElm label='first name' value='Enter your first name'/>
              <SelectElm label='Gender' value='Male,Female'/>
          </div>
      </div>
  );
}

export default App;
