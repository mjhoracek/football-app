import React from 'react'
import Dashboard from '../components/Layouts/Dashboard'
import Home from '../components/Pages/Home/index'
import {getSeasonStandings} from '../../client/services/mongodb/getSeasonStandings'
import {connectToDatabase} from '../utils/helpers/connectToDatabase'


const Homepage  = ({ allPlayerObjects }) => {
    return (
        <div>
            <Dashboard header='Welcome to the Football Pool'>
               <Home allPlayerObjects={allPlayerObjects} />
            </Dashboard>
        </div>
    )
}

export default Homepage

export async function getStaticProps() {
    await connectToDatabase()

    const allPlayerObjects = await getSeasonStandings()

    if (!allPlayerObjects) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { allPlayerObjects } , // will be passed to the page component as props
    }
  }