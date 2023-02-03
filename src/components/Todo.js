import React, { useContext } from 'react'
import { DataContext } from './DataProvider'
import { List } from './List'
import { FormInput } from './FormInput'
import { Filter } from './Filter'
import IconSun from '../assets/images/icon-sun.svg'
import IconMoon from '../assets/images/icon-moon.svg'

export const Todo = () => {
    const [themeDark, setThemeDark] = useContext(DataContext)

    const handleTheme = () => {
        setThemeDark(!themeDark)
    }
    return (
        // <DataContext.Consumer>
        < div className={` h-screen ${themeDark ? " bg-BgDark text-thirddark" : "bg-light text-primarylight"}  relative `
        }>
            <div className={`${themeDark ? "bg-BgImgDark" : "bg-BgImgLight"}  bg-no-repeat bg-cover h-[40vh]`}>
                <div className=' absolute right-1/2 translate-x-1/2  h-full  w-[70vh] pt-20 flex flex-col max-h-screen' >
                    <div className=' flex justify-between items-center'>
                        <h1 className={`${!themeDark && "text-white"} text-5xl tracking-[12px]`}>
                            TODO
                        </h1>
                        <button onClick={handleTheme}>
                            {
                                themeDark ? <img src={IconSun} alt='icon-sun' /> :
                                    <img src={IconMoon} alt='icon-moon' />
                            }
                        </button>
                    </div>
                    <div className='mt-8'>
                        <FormInput />
                        <div className={` mt-8 ${themeDark ? 'bg-primarydark' : 'bg-white'} shadow `}>
                            <List />
                            <Filter />
                        </div>
                    </div>
                    <div className=' h-full basis-auto inline-flex place-items-end mt-auto pb-10 justify-center'>
                        <h1 className={`${themeDark ? ' text-secondarydark' : ' text-secondarylight'}`}>
                            Drag and drop to reader list
                        </h1>
                    </div>
                </div>
            </div>
        </div >
        // </DataContext.Consumer>
    )
}
