
const Belongs = require("../models/entities/Belongs.entitiy")
const BelongsModel = require("../models/BelongsModel")

class BelongsService{

    constructor () {
        this.belongsModel = new BelongsModel()
    }

    async belongTeamId(data) {
    
        try{

            const temaList = await this.belongsModel.searchTeamMemberById(data)
        
            return temaList

        }catch(error){

            console.log(error.message)
            throw new Error(error)
        }
    }


   

}

module.exports = BelongsService