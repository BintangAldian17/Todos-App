import React, { useContext, useState } from 'react'
import { ListItem } from './ListItem'
import { DataContext } from './DataProvider'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

export const List = () => {
    const [themeDark, setThemeDark, todos, setTodos, filter, setFilter] = useContext(DataContext)
    const switchComplete = id => {
        const newTodos = [...todos]
        newTodos.forEach((todo, index) => {
            if (index === id) {
                todo.complete = !todo.complete
            }
        });
        setTodos(newTodos)
    }

    const handleRemove = id => {
        // setTodos(prevState => prevState.filter(t =>
        //     t.id !== id))
        const newTodos = [...todos]
        const remove = newTodos.filter((t, index) => {
            return index !== id
        })

        setTodos(remove)
    }

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
                    return <ListItem todo={todo} checkComplete={switchComplete} key={index} id={index} removeTodos={handleRemove} />
                })

            case "completed":
                const completedTodos = todos.filter((t) => t.complete === true)
                if (completedTodos.length === 0) {
                    return <> completed todos are empty</>
                }
                return completedTodos.map((todo, index) =>
                    <ListItem todo={todo} checkComplete={switchComplete} key={index} id={index} removeTodos={handleRemove} />
                )

            case "active":

                const activeTodos = todos.filter((t) => t.complete === true)
                if (activeTodos.length === 0) {
                    return <> Active todos are empty</>
                }
                return todos.filter((t) => t.complete === false).map((todo, index) =>
                    <ListItem todo={todo} checkComplete={switchComplete} key={index} id={index} removeTodos={handleRemove} />
                )

            default:
                break;
        }
    }



    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext items={todos} strategy={verticalListSortingStrategy}>
                <ul className={`${themeDark ? 'bg-primarydark' : 'bg-white'} max-h-[45vh] overflow-auto scroll-smooth`}>
                    {
                        renderFilteredTodos()
                    }
                </ul>
            </SortableContext>
        </DndContext>
    )
    function handleDragEnd(event) {
        console.log("drag end");
    }
}
