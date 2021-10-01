import React from 'react'
import * as a from './styles/styled2'

export default function ListFunction({items, theme, setLineFilter, setItems}) {

    function handleAll() {
        setLineFilter('all')
    }

    function handleActive() {
        setLineFilter('active')
    }

    function handleCompleted() {
        setLineFilter('completed')
    }

    function handleClearCompleted() {
        
        let itemsCompleted = items.filter((it) => {
            return !it.state
        })
        setItems(itemsCompleted)
    }


    return(
        <a.Functions theme={theme}>

            <a.CountItems>{items.length} items left</a.CountItems>
            <a.ClearCompleted onClick={handleClearCompleted}>Clear Completed</a.ClearCompleted>
            
            <a.StatusFilters>
                <span onClick={handleAll}>All</span>
                <span onClick={handleActive}>Active</span>
                <span onClick={handleCompleted}>Completed</span>
            </a.StatusFilters>
            
            
        </a.Functions>
    )
}