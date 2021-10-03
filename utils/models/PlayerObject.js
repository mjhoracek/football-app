import mongoose, { Schema } from 'mongoose'

const MODEL_NAME = 'PlayerObject'

const schema = new Schema({
    objectType: String,
    uid: String,
    playerName: {
        type: String,
        default: 'New Player',
    },
    playerID: String,
    email: String,
    userPaid: Boolean,
    createdAt: Date,
    pointTotals: [Number],
    picks: [
        [
            {
                points: Number,
                awayteam: String,
                hometeam: String,
                date: Date,
                chosenWinner: String,
                winner: String,
                wasPickCorrect: Boolean
            }
        ] 
    ],
    userStats: {
        ranking: Number,
        weeklyStats: {
            week1: {
                wins: Number,
                losses: Number,
                pointsAwarded: Number,
            }
        }
    },
})

const Model = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema)

export default Model