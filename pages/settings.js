import React, { useState, useEffect } from 'react'
import Dashboard from '../components/Layouts/Dashboard'
import UserSettings from '../components/Pages/UserSettings/index'
import { getPlayerObject } from '../hooks/api/getPlayerObject'
import { useAuth } from '../contexts/AuthContext'

const Settings = () => {
    const { currentUser } = useAuth()
    const [playerObject, setPlayerObject] = useState(null)


    useEffect(() => {
      const fetchData = async () => {
        const object = await getPlayerObject()
        setPlayerObject(object?.data[0])
      }
      if(currentUser){
        fetchData()
      }
    }, [currentUser])


    return (
        <div>
            <Dashboard header="Edit Account">
                <UserSettings setPlayerObject={setPlayerObject} playerObject={playerObject} />
            </Dashboard>
        </div>
    )
}

export default Settings
