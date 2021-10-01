import React from 'react'
import * as z from './styles/styled3'
import List from './List'

export default function ListArea({setItems, items, theme, lineFilter, setLineFilter}) {
    return(
        <z.ListContainer >

            <z.SearchField 
                theme={theme}
                placeholder="Create a new todo..." 
                onKeyUp={event => {
                    if(event.keyCode === 13) { // enter
                        setItems([...items, {id: Math.random(), name: event.target.value, state: false}]) 
                        event.target.value = '' //limpa form
                    }
                }}
            />

            <List 
                items={items} 
                theme={theme}
                lineFilter={lineFilter}
                setLineFilter={setLineFilter}
                setItems={setItems}
            />
            
        </z.ListContainer>
    )
}