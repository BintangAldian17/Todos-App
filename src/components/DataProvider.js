import React, { useState, useEffect, createContext } from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {


    const getLocalTodos = () => {
        let todoStore = localStorage.getItem('todoStore');
        // console.log(todoStore);

        if (todoStore) {
            return JSON.parse(localStorage.getItem('todoStore'))
        } else {
            return []
        }
    }

    const [themeDark, setThemeDark] = useState(true)
    const [todos, setTodos] = useState(getLocalTodos())
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
