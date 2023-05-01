const { databaseQuery } = require('../../middlewares/databaseQuery')

const Company = require('../../models/Company')

module.exports.insertCompanyService = async (company_name, company_address, year_founded) => {
    const company = new Company(null, company_name, company_address, year_founded, null, null)
    try{
        await databaseQuery(`INSERT INTO companies(company_name, company_address, year_founded, archived) VALUES ('${company.company_name}', '${company.company_address}', ${company.year_founded}, false)`)

        return { 
            result : JSON.stringify({
                result : 'Successfully added company record'
            }),
            statusCode : 201
        }
    } catch(error){
        console.error('Error has occured:', error)
        return { 
            body : JSON.stringify({
                message : error
            }),
            statusCode : 400
        }
    }
}