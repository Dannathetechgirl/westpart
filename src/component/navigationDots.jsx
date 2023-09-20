import React from 'react'

const NavigationDots = ({ active, index }) => {
    return (
        <div className='app__navigation'>
            {['home', 'clinic info', 'ocean app'].map((item) => (
                <a
                    key={item + index}
                    href={`#${item}`}
                    className='app__navigation-dot'
                    style={active === item ? { backgroundColor: '#A2BF3E' } : {}}
                />
            ))}
        </div>
    )
}

export default NavigationDots