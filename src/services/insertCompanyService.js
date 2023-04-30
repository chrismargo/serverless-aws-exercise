const { databaseQuery } = require('../middlewares/databaseQuery')

const Company = require('../models/Company')

module.exports.insertCompanyService = async (company_name, company_address, year_founded) => {
    const company = new Company(
            company_name = company_name,
            company_address = company_address,
            year_founded = year_founded
        )
    try{
        await databaseQuery(`INSERT INTO companies(company_name, company_address, year_founded) VALUES ('${company.company_name}', '${company.company_address}', ${company.year_founded})`)

        return { 
            result : JSON.stringify({
                result : 'Successfully added company record'
            }),
            statusCode : 201
        }
    } catch(error){
        return { 
            result : JSON.stringify({
                message : error
            }),
            statusCode : 400
        }
    }
}