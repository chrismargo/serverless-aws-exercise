const { databaseQuery } = require('../../middlewares/databaseQuery')

const Team =  require('../../models/Team')

module.exports.getTeamsByCompanyIdService = async (company_id) => {
    try{

        const response = await databaseQuery(`SELECT * FROM team WHERE company = ${company_id}`)
        const teams = response.rows.map((item) => {
            const team = new Team(item.team_id, item.team_name, item.team_leader, item.company, item.created_at, item.modified_at, item.archived)

            return team
        }) 

        return {
            result : JSON.stringify({
                result : teams
            }),
            statusCode: 200
        }
    }catch(error){
        console.error('Error has occurred:', error)
        return {
            body : JSON.stringify({
                message : error
            }),
            statusCode: 400
        }
    }
}