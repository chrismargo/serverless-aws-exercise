class Company {
    constructor(id, company_name, company_address, year_founded, modified_at, created_at, archived){
        this.id = id
        this.company_name = company_name
        this.company_address = company_address
        this.year_founded = year_founded
        this.modified_at = modified_at
        this.created_at = created_at
        this.archived = archived
    }

    get getCompanyId(){
        return this.id
    }

    get getCompanyName(){ 
        return this.company_name
    }

    set setCompanyName(company_name){
        this.company_name = company_name
    }

    get getCompanyAddress(){
        return this.company_address
    }

    set setCompanyAddress(company_address){
        this.company_address = company_address
    }

    get getYearFounded(){
        return this.year_founded
    }

    set setYearFounded(year_founded){
        this.year_founded = year_founded
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

module.exports = Company