
const Matching = require("../models/entities/Matching.entity")
const MatchingModel = require("../models/MatchingModel")

class MatchingService{

    constructor () {
        this.matchingModel = new MatchingModel()
    }

    async matchingTeamsId(data) {
    
        try{

            const temaList = await this.matchingModel.matchingTeamsById(data)
        
            return temaList

        }catch(error){

            console.log(error.message)
            throw new Error(error)
        }
    }


   

}

module.exports = MatchingService