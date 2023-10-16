import React from 'react'

const NavigationDots = ({ active, index }) => {
    return (
        <div className='app__navigation'>
            {['home', 'about'].map((item) => (
                <a
                    key={item + index}
                    href={`#${item}`}
                    className='app__navigation-dot'
                    style={active === item ? { backgroundColor: '#5cb25d' } : {}}
                />
            ))}
        </div>
    )
}

export default NavigationDots