import React from 'react'
import { NavigationDots } from '../component'


const appWrapper = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>


            <div className='app__wrapper '>
                <Component />

            </div>
            <NavigationDots active={idName} />
        </div>
    )
}

export default appWrapper