import Dashboard from '../components/Layouts/Dashboard'
import CurrentPicksBox from '../components/Pages/CurrentPicks'
import {getAllObjects} from '../services/mongodb/getAllObjects'
import {connectToDatabase} from '../utils/helpers/connectToDatabase'



const CurrentPicks = ({ allPlayerObjects }) => {

    return (
        <Dashboard 
            header='Current Picks' 
            savepicks={false}
        >
          <CurrentPicksBox allPlayerObjects={allPlayerObjects} />
        </Dashboard>
    )
}

export default CurrentPicks


export async function getStaticProps() {
    await connectToDatabase()

    const allPlayerObjects = await getAllObjects()

    if (!allPlayerObjects) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { allPlayerObjects } , // will be passed to the page component as props
    }
  }

