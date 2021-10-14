import PlayerObject from '../../utils/models/PlayerObject'

export const getSeasonStandings = async () => {
    const result = await PlayerObject.aggregate([
        {
          '$unwind': {
            'path': '$picks', 
            'includeArrayIndex': 'week', 
            'preserveNullAndEmptyArrays': false
          }
        }, {
          '$unwind': {
            'path': '$picks', 
            'includeArrayIndex': 'game', 
            'preserveNullAndEmptyArrays': false
          }
        }, {
          '$match': {
            'picks.wasPickCorrect': true
          }
        }, {
          '$group': {
            '_id': '$playerName', 
            'pointTotal': {
              '$sum': '$picks.points'
            }
          }
        }, {
          '$sort': {
            'pointTotal': -1
          }
        }
      ])

    return result
}