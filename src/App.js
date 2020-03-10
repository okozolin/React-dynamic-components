import React, {useState} from 'react';
import CreateComponents from "./components";
import {parseElementsFrom} from "./utils/formatData";
import TextAreaElem from "./components/textarea.component";
import './App.css';

export const ItemsContext = React.createContext();

function App() {
    const uiGrid = `
2;1;gender;SELECT;Male,Female
1;1;First Name;TEXT_INPUT;Enter your first name
2;2;marital status;SELECT;Single,Maried,Divorced
1;2;Last Name;TEXT_INPUT;Enter your last name
  `
    const [uiGridText, setUiGridText] = useState(uiGrid)
    let elements = parseElementsFrom(uiGridText);
    console.log('Rendering App')
  return (
      <div className="App">
        Hello Orit
          <div id="grid_text_container">
              <ItemsContext.Provider value={[uiGridText, setUiGridText]}>
                  <TextAreaElem/>
              </ItemsContext.Provider>
          </div>
          <div id="elements_container">
              {elements.map(block => CreateComponents(block))}
          </div>
      </div>
  );
}

export default App;
