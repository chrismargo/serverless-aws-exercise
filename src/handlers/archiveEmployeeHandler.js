const { archiveEmployeeService } = require('../services/employees/archiveEmployeeService')

module.exports.archiveEmployee = async (event, context) => {
    const { employee_id } = event.pathParameters
    const { result, statusCode } = await archiveEmployeeService(employee_id)

    return {
        body : result,
        statusCode : statusCode
    }
}