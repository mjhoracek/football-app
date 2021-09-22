import React from 'react'
import Dashboard from '../components/Layouts/Dashboard'
import Home from '../components/Pages/Home/index'


const Homepage  = () => {
    return (
        <div>
            <Dashboard header='Welcome to the Football Pool'>
               <Home />
            </Dashboard>
        </div>
    )
}

export default Homepage
