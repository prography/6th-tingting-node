const AvailEmailModel = require('../models/AvailableEmailModel')

class AvailableEmailService{

    constructor () {

        this.AvailEmailModel = new AvailEmailModel()

    }

    async getSchoolName(data){
        
        //domain parsing --> 
        const n = data.indexOf("@") 
        const domain = data.slice(n+1)

        console.log(domain)

        const schoolName = this.AvailEmailModel.findSchoolByDomain(domain)

        return schoolName

    }


}

module.exports = AvailableEmailService