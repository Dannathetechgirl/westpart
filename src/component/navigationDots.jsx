import React from 'react'

const NavigationDots = ({ active, index }) => {
    return (
        <div className='app__navigation'>
            {['home', 'doctors', 'about'].map((item) => (
                <a
                    key={item + index}
                    href={`#${item}`}
                    className='app__navigation-dot'
                    style={active === item ? { backgroundColor: '#C41E3A' } : {}}
                />
            ))}
        </div>
    )
}

export default NavigationDots