import React, { useContext, useState } from 'react'
import { DataContext } from './DataProvider'

export const FormInput = () => {

    const [themeDark, setThemeDark, todos, setTodos] = useContext(DataContext)

    const [todoName, setTodoName] = useState("");



    const addTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, { name: todoName, complete: false, id: Date.now() }])
        setTodoName('')
    }

    return (
        <form className={` w-full ${themeDark ? "bg-primarydark" : "bg-white"} rounded pl-5 items-center lg:h-[65px] h-16 flex gap-x-5`} autoComplete='off' onSubmit={addTodo} >
            <div>
                <button className={` w-6 h-6 rounded-full border ${themeDark ? 'border-secondarydark' : 'border-thirdlight'} align-middle`}></button>
            </div>
            <input type='text' name='todo' id='todo'
                required placeholder='Create a new todo...' className={` w-full  ${themeDark ? "bg-primarydark placeholder:text-secondarydark" : "bg-white placeholder:text-secondarylight"} lg:text-xl text-[15px] rounded outline-none`} value={todoName} onChange={e => setTodoName(e.target.value.toLocaleLowerCase())} />
        </form>
    )
}
