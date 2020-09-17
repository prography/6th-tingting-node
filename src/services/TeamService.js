const Team = require("../models/entities/Team.entitiy")
const TeamModel = require("../models/TeamModel")

class TeamService{

    constructor () {
        this.teamModel = new TeamModel()
    }


    async searchTeamAll() {
    
        try{

            const temaData = await this.teamModel.teamSearchAll()
        
            return temaData

        }catch(error){

            console.log(error.message)
            throw new Error(error)
        }
    }

    async searchTeamByQuery(data){

        try{
            const teamData = await this.teamModel.teamSearchByIdName(data)

            return teamData
        }catch(error){

            console.log(error.message)
            throw new Error(error)
        }
    }

}

module.exports = TeamService