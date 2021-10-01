import React, { useState } from 'react'
import * as x from './components/styles/styled1'
import Area from './components/Area'
import {ReactComponent as Sun} from './components/styles/images/icon-sun.svg'
import {ReactComponent as Moon} from './components/styles/images/icon-moon.svg'

function App() {
  
  const [items, setItems] = useState([])
  const [theme, setTheme] = useState(1)
  const [lineFilter, setLineFilter] = useState('all') 
  const body = document.querySelector('body')

  theme === 1 ? body.style.background = '#161722' : body.style.background = '#fafafa' 

  return (
    <x.Container theme={theme}>

      <x.Header>
        <title>TODO</title>
        {(theme === 1 
        ? <Sun onClick={() => setTheme(2)}className="sun"/>  
        : <Moon onClick={() => setTheme(1)} className="moon"/>) 
        }
      </x.Header>

      <Area 
        setItems={setItems} 
        items={items} 
        theme={theme}
        lineFilter={lineFilter}
        setLineFilter={setLineFilter}
      />

      <footer>Drag and drop to reorder list</footer>
    </x.Container>
    
  );
}

export default App;
