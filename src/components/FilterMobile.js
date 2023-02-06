import React, { useContext } from 'react'
import { DataContext } from './DataProvider'

export const FilterMobile = () => {
    const [themeDark, setThemeDark, todos, setTodos, filter, setFilter] = useContext(DataContext)
    return (
        <div className={`gap-x-5 flex w-full justify-center items-center py-3 mt-5 lg:hidden rounded ${themeDark ? ' bg-primarydark' : ' bg-white shadow'}`}>
            <button id='all' name='all' onClick={() => setFilter("all")} className={`${themeDark ? ' text-secondarydark' : ' text-secondarylight'} ${filter === 'all' && ' text-hoverelement'}`}>
                All
            </button>
            <button id='Active' name='Active' onClick={() => setFilter("active")} className={` ${themeDark ? ' text-secondarydark' : ' text-secondarylight'} ${filter === 'active' && ' text-hoverelement'}`}>
                Active
            </button>
            <button id='Completed' name='Completed' onClick={() => setFilter("completed")} className={` ${themeDark ? ' text-secondarydark' : ' text-secondarylight'} ${filter === 'completed' && ' text-hoverelement'}`}>
                Completed
            </button>
        </div>
    )
}
