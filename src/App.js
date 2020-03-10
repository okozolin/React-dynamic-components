import React, {useContext, useState} from 'react';
import InputElm from "./components/inputtext.component";
import SelectElm from "./components/select.component";
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
        //split data in line
        for (const elm of elemArr ) {
          elements.push(elm.split(';'))
        }
        // sort the array by row (first element) in ascending order
        elements.sort(function(a, b) {
          return a[0] - b[0];
        });

        elements = elements.map(block => {
            return {
                row: +block[0],
                col: +block[1],
                label: block[2],
                type: block[3],
                value: block[4]
            }
        })
        console.log("elements", elements)
    }

    // UI text
    // ---------------------------------
    //
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
