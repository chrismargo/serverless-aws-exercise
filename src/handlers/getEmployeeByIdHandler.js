const { getEmployeeByIdService } = require('../services/employees/getEmployeeByIdService')

module.exports.getEmployeeById = async (event, context) => {
    const { employee_id } = event.pathParameters
    const { result, statusCode } = await getEmployeeByIdService(employee_id)

    return {
        body : result,
        statusCode : statusCode
    }
}