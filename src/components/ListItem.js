import React, { useContext, useState } from 'react'
import { DataContext } from './DataProvider'
import IconCross from '../assets/images/icon-cross.svg'
import IconCheck from '../assets/images/icon-check.svg'

export const ListItem = ({ todo, checkComplete, id, removeTodos }) => {
    const [themeDark, setThemeDark] = useContext(DataContext)

    const [mouseInside, setMouseInside] = useState(false)

    const mouseEnter = () => {
        setMouseInside(true)
    }

    const mouseLeave = () => {
        setMouseInside(false)
    }
    return (
        <li className={` flex justify-between px-6 py-4 border-b ${themeDark ? "border-secondarydark" : " border-thirdlight"}`}
            onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <label htmlFor={id} className='flex gap-x-5 flex-wrap items-end'>
                <button className={`${todo.complete ? " bg-gradient-to-br from-primarylinear to-secondarylinear border-none" : "bg-none"} w-6 h-6 border rounded-full ${themeDark ? 'border-secondarydark' : 'border-thirdlight'} flex justify-center items-center`} id={id} checked={todo.complete}
                    onClick={() => checkComplete(id)}
                >
                    {
                        todo.complete && (
                            <img src={IconCheck} alt='icon-check' />
                        )
                    }
                </button>
                {
                    themeDark ?
                        <span className={` ${todo.complete && ' line-through  text-secondarydark'}  text-xl`}>{todo.name}</span>
                        :
                        <span className={` ${todo.complete && ' line-through text-thirdlight'} text-xl`}>{todo.name}</span>
                }

            </label>
            {mouseInside && (
                <button onClick={() => removeTodos(id)} ><img src={IconCross} alt='icon-cross' /></button>
            )}

        </li>
    )
}
