import React from 'react'
import Dashboard from '../components/Layouts/Dashboard'
import UserSettings from '../components/Pages/UserSettings/index'

const Settings = () => {

    return (
        <div>
            <Dashboard header="Edit Account">
                <UserSettings />
            </Dashboard>
        </div>
    )
}

export default Settings
