import React, { useContext } from 'react'
import { DataContext } from './DataProvider'
import { List } from './List'
import { FormInput } from './FormInput'
import { Filter } from './Filter'
import { FilterMobile } from './FilterMobile'
import IconSun from '../assets/images/icon-sun.svg'
import IconMoon from '../assets/images/icon-moon.svg'

export const Todo = () => {
    const [themeDark, setThemeDark] = useContext(DataContext)

    const handleTheme = () => {
        setThemeDark(!themeDark)
    }
    return (
        // <DataContext.Consumer>
        < div className={` h-screen ${themeDark ? " bg-BgDark text-thirddark" : "  text-primarylight"}  relative `
        }>
            <div className={`${themeDark ? "lg:bg-BgImgDark bg-BgImgDarkMob" : "lg:bg-BgImgLight bg-BgImgLightMob"}  bg-no-repeat bg-cover lg:h-[40vh] h-[30vh]`}>
                <div className=' absolute right-1/2 translate-x-1/2  h-full lg:w-[70vh] w-full px-5 lg:px-0 lg:pt-20 pt-16 flex flex-col max-h-screen' >
                    <div className=' flex justify-between items-center'>
                        <h1 className={`${!themeDark && "text-white"} lg:text-5xl text-3xl font-semibold tracking-[12px]`}>
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
                        <div className={` lg:mt-8 mt-4 ${themeDark ? 'bg-primarydark' : 'bg-white'} shadow rounded-xl lg:shadow-xl `}>
                            <List />
                            <Filter />
                        </div>
                    </div>
                    <div>
                        <FilterMobile />
                    </div>
                    <div className=' h-full basis-auto inline-flex lg:place-items-end place-items-center mt-auto pb-10 justify-center'>
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
