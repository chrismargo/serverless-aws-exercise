const ServerlessClient = require('serverless-postgres')

const client = new ServerlessClient({
  user : 'postgres',
  host : 'containers-us-west-205.railway.app',
  database: 'railway',
  password: '3jZPzHo1OD8wKO1VP5YG',
  port: 5870,
  debug : true,
  delayMs : 3000
})

/*
For Companies
*/

// Get All Companies
module.exports.getAllCompanies = async (event, context, callback) => {
  await client.connect()

  const response = await client.query('SELECT * FROM companies')

  await client.clean()

  return {
    statusCode: 200,
    body : JSON.stringify({ result : response.rows })
  }
}

// Get Company by ID
module.exports.getCompanyById = async (event, context, callback) => {
  const { company_id } = event.pathParameters

  await client.connect()

  const response = await client.query(`SELECT * FROM companies WHERE company_id = ${company_id}`)

  await client.clean()

  return {
    statusCode : 200,
    body : JSON.stringify({
      result : response.rows[0]
    })
  }
}

// Create Company
module.exports.insertCompany = async (event, context, callback) => {
  const { company_name, company_address, year_founded } = JSON.parse(event.body)

  await client.connect()

  const response = await client.query(`INSERT INTO companies(company_name, company_address, year_founded, created_at, modified_at, archived) VALUES ('${company_name}', '${company_address}', ${year_founded}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false)`)

  await client.clean()

  return {
    statusCode: 201,
    body : JSON.stringify({ response })
  }
}

// Edit Company Details - Edit All Details
module.exports.updateCompanyById = async (event, context, callback) => {
  const { company_id } = event.pathParameters
  const { company_name, company_address, year_founded } = JSON.parse(event.body)

  await client.connect()

  const response = await client.query(`UPDATE companies SET company_name = '${company_name}', company_address = '${company_address}', year_founded = ${year_founded}, modified_at = CURRENT_TIMESTAMP WHERE company_id = ${company_id}`)

  await client.clean()

  return {
    statusCode: 204,
    body : JSON.stringify({ result : response })
  }
}

// Archive Company - Should also archive all team and employees
module.exports.archiveCompanyById = async (event, context, callback) => {
  const { company_id } = event.pathParameters

  await client.connect()

  const company_response = await client.query(`UPDATE companies SET archived = true, modified_at = CURRENT_TIMESTAMP WHERE company_id = ${company_id}`)
  const team_response = await client.query(`UPDATE team SET archived = true, modified_at = CURRENT_TIMESTAMP WHERE company = ${company_id}`)
  const employee_result = await client.query(`SELECT employees.employee_id FROM team JOIN employees ON team.team_id = employees.team JOIN companies ON team.company = companies.company_id WHERE companies.company_id = ${company_id};`)

  employee_result.rows.forEach(async (row) => {
    console.log(row.employee_id)
    let response = await client.query(`UPDATE employees SET archived = true, modified_at = CURRENT_TIMESTAMP WHERE employee_id = ${row.employee_id}`)
  })

  await client.clean()

  return {
    statusCode: 204,
    body : JSON.stringify({ result : company_response })
  }
}


/*
For Teams
*/

// Get All Team by Company
module.exports.getTeamsByCompanyId = async (event, context, callback) => {
  const { company_id } = event.pathParameters

  await client.connect()

  const response = await client.query(`SELECT * FROM team WHERE company = ${company_id}`)

  await client.clean()

  return {
    statusCode: 200,
    body : JSON.stringify({
      result : response.rows
    })
  }
}

// Get Team by ID
module.exports.getTeamById = async (event, context, callback) => {
  const { team_id } = event.pathParameters

  await client.connect()

  const response =  await client.query(`SELECT * FROM team WHERE team_id = ${team_id}`)

  await client.clean()

  return {
    statusCode: 200,
    body : JSON.stringify({
        result : response.rows[0]
    })
  }
}

// Create Team for Specific Company ID
module.exports.insertTeam = async (event, context, callback) => {
  const { team_name, team_leader, company_id } = JSON.parse(event.body)

  await client.connect()

  const response =  await client.query(`INSERT INTO team (team_name, team_leader, company, created_at, modified_at, archived) VALUES ('${team_name}', '${team_leader}', ${company_id}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false)`)

  await client.clean()

  return {
    statusCode: 200,
    body : JSON.stringify({
        result : response
    })
  }
}

// Edit Team Details - Edit All Details
module.exports.editTeamById = async (event, context, callback) => {
  const { team_id } = event.pathParameters
  const { team_name, team_leader, company_id } = JSON.parse(event.body)
  
  await client.connect()

  const response =  await client.query(`UPDATE team SET team_name = '${team_name}', team_leader = '${team_leader}', company = ${company_id}, modified_at = CURRENT_TIMESTAMP WHERE team_id = ${team_id}`)

  await client.clean()

  return {
    statusCode: 200,
    body : JSON.stringify({
        result : response
    })
  }
}

// Archive Team - Should also archive all employees
module.exports.archiveTeam = async (event, context, callback) => {
  const { team_id } = event.pathParameters
  
  await client.connect()

  const team_result = await client.query(`UPDATE team SET archived = true, modified_at = CURRENT_TIMESTAMP WHERE team_id = ${team_id}`)
  const employee_result = await client.query(`UPDATE employees SET archived = true, modified_at = CURRENT_TIMESTAMP WHERE team = ${team_id};`)

  await client.clean()

  return {
    statusCode: 204,
    body : JSON.stringify({ result : employee_result })
  }

}

/*
For Employees
*/

// Get All Employee By Company
module.exports.getEmployeesByCompanyId = async (event, context, callback) => {
  const { company_id } = event.pathParameters

  await client.connect()

  const response =  await client.query(`SELECT employees.* FROM employees JOIN team ON employees.team = team.team_id JOIN companies ON team.company = companies.company_id WHERE companies.company_id = ${company_id}`)

  await client.clean()

  return {
    statusCode: 200,
    body : JSON.stringify({
        result : response.rows
    })
  }
}

// Get All Employee By Team
module.exports.getEmployeesByTeamId = async (event, context, callback) => {
  const { team_id } = event.pathParameters

  await client.connect()

  const response =  await client.query(`SELECT employees.* FROM team JOIN employees ON team.team_id = employees.team WHERE team.team_id = ${team_id}`)

  await client.clean()

  return {
    statusCode: 200,
    body : JSON.stringify({
        result : response.rows
    })
  }
}

// Get Employee By ID
module.exports.getEmployeeById = async (event, context, callback) => {
  const { employee_id } = event.pathParameters

  await client.connect()

  const response =  await client.query(`SELECT * FROM employees WHERE employee_id = ${employee_id}`)

  await client.clean()

  return {
    statusCode: 200,
    body : JSON.stringify({
        result : response.rows[0]
    })
  }
}

// Create Employee
module.exports.insertEmployee = async (event, context, callback) => {
  const { employee_name, company_title, year_hired, salary, birthdate, image, team_id } = JSON.parse(event.body)

  await client.connect()

  const response =  await client.query(`INSERT INTO employees (employee_name, company_title, year_hired, salary, birthdate, image, team, created_at, modified_at, archived) VALUES ('${employee_name}', '${company_title}', ${year_hired}, ${salary}, '${birthdate}', '${image}', ${team_id}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false)`)

  await client.clean()

  return {
    statusCode: 200,
    body : JSON.stringify({
        result : response
    })
  }
}

// Edit Employee Details - Edit All Details
module.exports.editEmployeeById = async (event, context, callback) => {
  const { employee_id } = event.pathParameters
  const {employee_name, company_title, year_hired, salary, birthdate, image, team_id } = JSON.parse(event.body)

  await client.connect()

  const response =  await client.query(`UPDATE employees SET employee_name = '${employee_name}', company_title = '${company_title}', year_hired = ${year_hired}, salary = ${salary}, birthdate = '${birthdate}', image = '${image}', team = ${team_id}, modified_at = CURRENT_TIMESTAMP WHERE employee_id = ${employee_id}`)

  await client.clean()

  return {
    statusCode: 200,
    body : JSON.stringify({
        result : response
    })
  }
}

// Archive Employee
module.exports.archiveEmployee = async (event, context, callback) => {
  const { employee_id } = event.pathParameters

  await client.connect()

  const response =  await client.query(`UPDATE employees SET archived = true WHERE employee_id = ${employee_id}`)

  await client.clean()

  return {
    statusCode: 200,
    body : JSON.stringify({
        result : response
    })
  }
}