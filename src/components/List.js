import React, { useContext, useState } from 'react'
import { ListItem } from './ListItem'
import { DataContext } from './DataProvider'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

export const List = () => {
    const [themeDark, setThemeDark, todos, setTodos, filter, setFilter] = useContext(DataContext)

    // switch complete list false --> true
    const switchComplete = id => {
        const newTodos = [...todos]
        newTodos.forEach((todo) => {
            if (todo.id === id) {
                todo.complete = !todo.complete
            }
        });
        setTodos(newTodos)
    }

    // remove list
    const handleRemove = id => {
        const newTodos = [...todos]
        const remove = newTodos.filter((t) => {
            return t.id !== id
        })

        setTodos(remove)
    }

    // event dnd kit library
    const handleDragEnd = ({ active, over }) => {
        if (active.id !== over.id) {
            setTodos((todos) => {
                const oldIndex = todos.findIndex(item => item.id === active.id)
                const newIndex = todos.findIndex(item => item.id === over.id)
                return arrayMove(todos, oldIndex, newIndex)
            })

        }
    }


    // filter list
    const renderFilteredTodos = () => {
        switch (filter) {
            case "all":
                if (todos.length === 0) {
                    return (
                        <div className=' text-center py-20'>
                            <h1 className={`text-3xl ${themeDark ? ' text-secondarydark' : ' text-secondarylight'}`}>PUT SOME TODOS...</h1>
                        </div>
                    )
                }
                return todos.map((todo, index) => {
                    return <ListItem todo={todo} checkComplete={switchComplete} key={index} removeTodos={handleRemove} />
                })

            case "completed":
                const completedTodos = todos.filter((t) => t.complete === true)
                if (completedTodos.length === 0) {
                    return <div className=' text-center py-20'>
                        <h1 className={`text-3xl ${themeDark ? ' text-secondarydark' : ' text-secondarylight'}`}>Completed todos are empty</h1>
                    </div>
                }
                return completedTodos.map((todo, index) =>
                    <ListItem todo={todo} checkComplete={switchComplete} key={index} removeTodos={handleRemove} />
                )

            case "active":

                const activeTodos = todos.filter((t) => t.complete === true)
                if (activeTodos.length === 0) {
                    return <div className=' text-center py-20'>
                        <h1 className={`text-3xl ${themeDark ? ' text-secondarydark' : ' text-secondarylight'}`}>Active todos are empty</h1>
                    </div>
                }
                return todos.filter((t) => t.complete === false).map((todo, index) =>
                    <ListItem todo={todo} checkComplete={switchComplete} key={index} removeTodos={handleRemove} />
                )

            default:
                break;
        }
    }



    return (

        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}>
            <SortableContext
                items={todos.map(item => item.id)}
                strategy={verticalListSortingStrategy}>
                <ul className={`${themeDark ? 'bg-primarydark' : 'bg-white'} lg:max-h-[45vh] max-h-[36.5vh] overflow-auto scroll-smooth rounded-[4px]`}>
                    {
                        renderFilteredTodos()
                    }
                </ul>
            </SortableContext>

        </DndContext>

    )

}
