const { databaseQuery }  = require("../middlewares/databaseQuery")

const Company  = require("../models/Company")

module.exports.getCompanyByIdService = async (company_id) => {
    try{
        const [result] = (await databaseQuery(`SELECT * FROM companies WHERE company_id = ${company_id}`)).rows

        const company = new Company(result.company_id, result.company_name, result.company_address, result.year_founded, result.modified_at, result.created_at, result.archived)

        return {
            result : JSON.stringify({
                result : company
            }),
            statusCode : 200
        }
    }catch(error){
        return {
            result : JSON.stringify({
                message : error
            }),
            statusCode : 400
        }
    }
  }