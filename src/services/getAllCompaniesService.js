const { databaseQuery }  = require("../middlewares/databaseQuery")

const Company  = require("../models/Company")

module.exports.getAllCompaniesService = async () => {
    try{
        const response = await databaseQuery('SELECT * FROM companies')
        const companies = response.rows.map(item => {
            const company = new Company(item.company_id, item.company_name, item.company_address, item.created_at, item.updated_at, item.archived)

            return company
        })

        return {
            result : JSON.stringify({
                result : companies
            }),
            statusCode : 200
        }
    } catch (error){
        console.error(`Error has occurred:`, error)
        return {
            body : JSON.stringify({
                message : error
            }),
            statusCode : 400
        }
    }
}