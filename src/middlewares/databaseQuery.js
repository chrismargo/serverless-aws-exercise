const { client } = require('../database')

module.exports.databaseQuery = async (query) => {
    client.connect()
    const result = await client.query(query)
    client.clean()

    return result
}