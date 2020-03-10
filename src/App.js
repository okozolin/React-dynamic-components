import React, {useContext, useState} from 'react';
import CreateComponents from "./components";
import './App.css';

export const ItemsContext = React.createContext();

function App() {
    let elements = [];
    const uiGrid = `
2;1;gender;SELECT;Male,Female
1;1;First Name;TEXT_INPUT;Enter your first name
2;2;marital status;SELECT;Single,Maried,Divorced
1;2;Last Name;TEXT_INPUT;Enter your last name
  `
    const [uiGridText, setUiGridText] = useState(uiGrid)

    const parseElements = (uiGrid) => {
        //remove any white spaces at the start and split to rows
        const elemArr =
            uiGrid.replace(/^\s*$(?:\r\n?|\n)/gm,'')
            .trim()
            .split('\n')
        //split data in line
        for (const elm of elemArr ) {
          elements.push(elm.split(';'))
        }

        // sort the array by row (first element) in ascending order
        elements.sort((a, b) => {
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

    console.log('Rendering App')
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
              {elements.map(block => CreateComponents(block))}
          </div>
      </div>
  );
}

export default App;
