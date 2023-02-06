import React, { useContext, useState } from 'react'
import { DataContext } from './DataProvider'
import IconCross from '../assets/images/icon-cross.svg'
import IconCheck from '../assets/images/icon-check.svg'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'


export const ListItem = ({ todo, checkComplete, removeTodos }) => {
    const [themeDark, setThemeDark] = useContext(DataContext)

    // hover icon cross
    const [mouseInside, setMouseInside] = useState(false)

    const mouseEnter = () => {
        setMouseInside(true)
    }

    const mouseLeave = () => {
        setMouseInside(false)
    }
    //dnd kit library 

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: todo.id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }
    return (

        <li className={` flex justify-between px-6 lg:py-4 py-3 border-b ${themeDark ? "border-secondarydark" : " border-thirdlight"}`}
            onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
            ref={setNodeRef} style={style} {...attributes} {...listeners} >
            <label htmlFor={todo.id} className='flex gap-x-5 flex-wrap items-center'>
                <button className={`${todo.complete ? " bg-gradient-to-br from-primarylinear to-secondarylinear border-none" : "bg-none"} lg:w-6 lg:h-6 w-4 h-4 border rounded-full ${themeDark ? 'border-secondarydark' : 'border-thirdlight'} flex justify-center items-center`} id={todo.id} checked={todo.complete}
                    onClick={() => checkComplete(todo.id)}
                >
                    {
                        todo.complete && (
                            <img src={IconCheck} alt='icon-check' />
                        )
                    }
                </button>
                <div>
                    {
                        themeDark ?

                            <span className={` ${todo.complete && ' line-through  text-secondarydark'}  lg:text-xl text-base`}>{todo.name}</span>
                            :
                            <span className={` ${todo.complete && ' line-through text-thirdlight'} lg:text-xl text-base`}>{todo.name}</span>
                    }
                </div>
            </label>
            {mouseInside && (
                <button className='lg:block hidden' onClick={() => removeTodos(todo.id)} ><img src={IconCross} alt='icon-cross' /></button>
            )}
            <button className='lg:hidden block' onClick={() => removeTodos(todo.id)} ><img src={IconCross} alt='icon-cross' /></button>
        </li>

    )
}
