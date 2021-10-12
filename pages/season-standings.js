import Dashboard from '../components/Layouts/Dashboard'
import SeasonStandingsBox from '../components/Pages/SeasonStandings'
import {getSeasonStandings} from '../services/mongodb/getSeasonStandings'
import {connectToDatabase} from '../utils/helpers/connectToDatabase'

const SeasonStandings = ({ allPlayerObjects }) => {

    return (
        <Dashboard 
            header='Season Standings' 
            savepicks={false}
        >
            <SeasonStandingsBox allPlayerObjects={allPlayerObjects} />
        </Dashboard>
    )
}

export default SeasonStandings

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
