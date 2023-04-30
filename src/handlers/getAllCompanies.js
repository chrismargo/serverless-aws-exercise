const { getAllCompaniesService } = require('../services/getAllCompaniesService')

module.exports.getAllCompanies = async (event, context) => {
    const { result, statusCode } = await getAllCompaniesService()

    return { 
        result : result,
        statusCode : statusCode
    }
}