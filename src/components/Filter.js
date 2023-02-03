import React, { useContext } from 'react'
import { DataContext } from './DataProvider'


export const Filter = () => {
    const [themeDark, setThemeDark, todos, setTodos, filter, setFilter] = useContext(DataContext)

    console.log({ todos });


    const handleClearCompleted = () => {
        console.log("handle completed");
        const newTodos = [...todos]
        const clearCompleted = newTodos.filter((t) => {
            return t.complete === false
        })
        setTodos(clearCompleted)
    }

    return (
        <div className={`${themeDark ? "bg-primarydark" : "bg-white"}  rounded shadow-lg `} >
            <div className={`flex justify-between px-4 py-4 ${themeDark ? "text-secondarydark" : "text-secondarylight"}`}>
                <span>{todos.filter(todo => todo.complete === false).length} items left</span>
                <div className='flex gap-x-5'>
                    <button id='all' name='all' onClick={() => setFilter("all")} className={`${themeDark ? 'hover:text-thirddark' : ' hover:text-primarylight'} ${filter === 'all' ? 'text-hoverelement hover:text-hoverelement' : ''}`}>
                        All
                    </button>
                    <button id='Active' name='Active' onClick={() => setFilter("active")} className={` ${themeDark ? 'hover:text-thirddark' : ' hover:text-primarylight'} ${filter === 'active' ? 'text-hoverelement hover:text-hoverelement' : ''}`}>
                        Active
                    </button>
                    <button id='Completed' name='Completed' onClick={() => setFilter("completed")} className={` ${themeDark ? 'hover:text-thirddark' : ' hover:text-primarylight'} ${filter === 'completed' ? 'text-hoverelement hover:text-hoverelement' : ''}`}>
                        Completed
                    </button>
                </div>
                <button id='clear' name='clear' onClick={handleClearCompleted} className={`${themeDark ? 'hover:text-thirddark' : ' hover:text-primarylight'}`}>
                    Clear Completed
                </button>
            </div>
        </div>
    )
}
