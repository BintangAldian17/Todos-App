import React, { useState, useEffect, createContext } from 'react'

export const DataContext = createContext();

const getLocalTodos = () => {
    let todoStore = localStorage.getItem('todoStore');
    if (todoStore) {
        return JSON.parse(localStorage.getItem('todoStore'))
    } else {
        return []
    }
}


export const DataProvider = (props) => {
    const todosLocal = getLocalTodos()
    const [themeDark, setThemeDark] = useState(true)
    const [todos, setTodos] = useState(todosLocal)
    const [filter, setFilter] = useState("all")




    useEffect(() => {
        localStorage.setItem('todoStore', JSON.stringify(todos))
    }, [todos])


    return (

        <DataContext.Provider value={[themeDark, setThemeDark, todos, setTodos, filter, setFilter]} >
            {props.children}
        </DataContext.Provider>
    )
}
