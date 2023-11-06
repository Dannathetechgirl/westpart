import React from 'react'
import { About, Footer, Home, Doctors } from './container'
import { Navbar } from './component'

import './app.scss'

function App() {
    return (
        <div className='app'>
            <Navbar />

            <Home />

            <Doctors />
            <About />
            <Footer />
        </div>
    )
}
export default App;