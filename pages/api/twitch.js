// export default async function (req, res) {

//   const TWITCH_CLIENT_ID = 'twqle6kcdk3wfwnk9l9zdxczhc91sl';
//   const TWITCH_SECRET    = '7vwf72y2bg1sn2leisz93sl9vz7277';

//   const tokenUrl = `https://id.twitch.tv/oauth2/token?client_id=${TWITCH_CLIENT_ID}&client_secret=${TWITCH_SECRET}&grant_type=client_credentials&scope=`
  
//   async function getToken() {
//     try {
//       const response = await fetch(tokenUrl, {
//         method: 'POST',
//         redirect: 'follow'
//       })

//       const data = await response.json()
//       return data
//     } catch (error) {
//       console.log('Token fetch error', error)
//     }

//   } 

//   const token = await getToken()
//   const { access_token } = token
//   console.log('the token is', token)



//   async function getStreams() {
//     try {
//           const response = await fetch("https://api.twitch.tv/helix/streams/", {
//             method: 'GET',
//             headers: {
//               "Client-ID" : TWITCH_CLIENT_ID,
//               'Authorization' : `Bearer ${access_token}`,
//             },
//             redirect: 'follow'
//           })

//         const data = await response.json()
//         return data

//     } catch (error) {
//         console.log('Get Streams error', error)
//       }
//   }
  
//  const streams = await getStreams()
//  console.log('Streams are:', streams)
//  res.json({streams})

// }