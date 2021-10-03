import PlayerObject from '../../utils/models/PlayerObject'

export const getAllObjects = async () => {
    const result = await PlayerObject.aggregate([
        {
            '$project': {
                'date': 0,
            }
        },
    ])

    const serialized = result.map((player) => ({
        ...player,
        _id: player._id.toString(),
    }))


    return serialized
}