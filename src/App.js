import React from 'react'
import { About, Footer, Home, Doctor } from './container'
import { Navbar } from './component'

import './app.scss'

function App() {
    return (
        <div className='app'>
            <Navbar />

            <Home />

            <Doctor />
            <About />
            <Footer />
        </div>
    )
}
export default App;