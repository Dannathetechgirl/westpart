import React from 'react'
import { About, Footer, Home } from './container'
import { Navbar } from './component'

import './app.scss'

function App() {
    return (
        <div className='app'>
            <Navbar />
            <section>
                <Home />
            </section>

            <About />
            <Footer />
        </div>
    )
}
export default App;