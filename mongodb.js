

const { MongoClient, ObjectID} = require("mongodb")

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'movie_reservation'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error,client) => {
    if (error) {
        return console.log('Unable toconnect to database!')
    }
    const db = client.db(databaseName)
})