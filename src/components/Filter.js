import React, { useContext } from 'react'
import { DataContext } from './DataProvider'


export const Filter = () => {
    const [themeDark, setThemeDark, todos, setTodos, filter, setFilter] = useContext(DataContext)

    const handleClearCompleted = () => {
        const newTodos = [...todos]
        const clearCompleted = newTodos.filter((t) => {
            return t.complete === false
        })
        setTodos(clearCompleted)
    }

    return (
        <div className={`${themeDark ? "bg-primarydark" : "bg-white"}  rounded lg:shadow-lg shadow`} >
            <div className={`flex justify-between lg:px-4 px-6 lg:py-4 py-4 items-center text-center  ${themeDark ? "text-secondarydark" : "text-secondarylight"}`}>
                <span className='  lg:text-base text-sm cursor-not-allowed'>{todos.filter(todo => todo.complete === false).length} items left</span>
                <div className='lg:flex gap-x-5 hidden '>
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
                <button id='clear' name='clear' onClick={handleClearCompleted} className={`${themeDark ? 'lg:hover:text-thirddark' : ' lg:hover:text-primarylight'} lg:text-base text-sm`}>
                    Clear Completed
                </button>
            </div>
        </div>
    )
}
