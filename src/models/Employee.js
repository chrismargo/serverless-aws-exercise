class Employee{
    constructor(employee_id, employee_name, company_title, year_hired, birthdate, salary, image, team, created_at, modified_at, archived){
        this.employee_id = employee_id
        this.employee_name = employee_name
        this.company_title = company_title
        this.year_hired = year_hired
        this.birthdate = birthdate
        this.salary = salary
        this.image = image
        this.team = team
        this.created_at = created_at
        this.modified_at = modified_at
        this.archived = archived
    }

    get getEmployeeId(){
        return this.employee_id
    }

    get getEmployeeName(){
        return this.employee_name
    }

    set setEmployeeName(employee_name){
        this.employee_name = employee_name 
    }

    get getCompanyTitle(){
        return this.company_title
    }

    set setCompanyTitle(company_title){
        this.company_title = company_title
    }

    get getYearHired(){
        return this.year_hired
    }

    set setYearHired(year_hired){
        this.year_hired = year_hired
    }

    get getBirthDate(){
        return this.birthdate
    }

    set setBirthDate(birthdate){
        this.birthdate = birthdate
    }

    get getSalary(){
        return this.salary
    }

    set setSalary(salary){
        this.salary = salary
    }

    get getImage(){
        return this.image
    }

    set setImage(image){
        this.image = image
    }

    get getTeam(){
        return this.team
    }

    set setTeam(team){
        this.team = team
    }

    get getCreatedAt(){
        return this.created_at
    }

    get getModifiedAt(){
        return this.modified_at
    }

    set setModifiedAt(modified_at){
        this.modified_at = modified_at
    }

    get getArchived(){
        return this.archived
    }

    set setArchived(state){
        this.archived = state
    }
}

module.exports = Employee