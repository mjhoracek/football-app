import PlayerObject from '../../utils/models/PlayerObject'

export const getPlayersPointTotals = async (week) => {
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
            'week': week
          }
        }, {
          '$match': {
            'picks.wasPickCorrect': false
          }
        }, {
          '$group': {
            '_id': '$playerName', 
            'pointTotal': {
              '$sum': '$picks.points'
            }
          }
        },
      ])

    return result
}