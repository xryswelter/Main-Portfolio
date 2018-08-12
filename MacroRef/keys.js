console.log('moo')

exports.post={
    apiKey:process.env.POST_apiKey,    
    authDomain: process.env.POST_authDomain,
    databaseURL: process.env.POST_databaseURL,
    projectId: process.env.POST_projectId,
    storageBucket: process.env.POST_StorageBucket,
    messagingSenderId: process.env.POST_messagingSenderId
}
