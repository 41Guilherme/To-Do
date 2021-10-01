import React from 'react'
import Functions from './Functions'
import * as y from './styles/styled4'
import {ReactComponent as Close} from './styles/images/close.svg'

export default function List({items, setItems, theme, lineFilter, setLineFilter}) {

    function itemChecked(checked, itemId) {
        const itemsCopy = [...items]
        let item = itemsCopy.filter((i) => {
            return i.id === itemId
        })[0]

        item.state = checked
        setItems(itemsCopy)     
    }

    let showItems = [...items] //mostra os itens ativos
    if ( lineFilter ==='active') {   
        showItems = showItems.filter(it => !it.state)    
    }
    else if (lineFilter === 'completed'){ //mostra os itens completos
        showItems = showItems.filter(it => it.state)
    }

    function taskDel(id) {
        console.log(id)
        showItems = showItems.filter(item => item.id !== id)
        setItems(showItems) 
    }

    return(
        <y.TodoList theme={theme}>
            <ul>
                {showItems.map((item, key) => {

                    return( 
                        <li key={key}> 
                            <y.Checkbox> <input type="checkbox" 
                                onChange={(e) => 
                                itemChecked(e.target.checked, item.id)}  
                                checked={item.state}
                                />
                                <span className="checkSpan" />
                                <a className="item">{item.name}</a>     
                            </y.Checkbox> 
                            <p><Close onClick={() => taskDel(item.id)} /></p>
                        </li>
                    )
                })}
            </ul>
            <Functions 
                items={items} 
                theme={theme} 
                setLineFilter={setLineFilter}
                setItems={setItems}
            />
        </y.TodoList>
    )
}