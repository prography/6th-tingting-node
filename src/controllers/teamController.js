const { json } = require("body-parser");
const BelongsService = require("../services/BelongService");
const MatchingService = require("../services/MatchingService");
const TeamService = require("../services/TeamService")
const UserService = require("../services/UserViewService")

const searchTeam = async(req, res) => {
    const teamService = new TeamService()

    try{
    
        if(Object.keys(req.query).length ===0){
            
            const data = await teamService.searchTeamAll(); 

            return  res.status(201).json({
                "state" : 1,
                "message" : "성공",
                "data" : data
            })

        }else{
            const queryData = req.query.search

            const data =  await teamService.searchTeamByQuery(queryData);
        
            return  res.status(201).json({
                "state" : 1,
                "message" : "성공",
                "data" : data
            })
            
        }

    }catch(error){
        console.log(error.message)
        res.status(202).json({
            "state" : 0,
            "message" : "실패",
            "data" : {}
        })
    }
}

    const searchTeamById = async(req, res) =>{
        const teamService = new TeamService()
        const belongsService = new BelongsService()
        const matchingService = new MatchingService() 
        const userService = new UserService() 
    


        try{

            const teamData = await teamService.searchTeamById(req.params.teamId) 
            const teamBelongUserList =  await belongsService.belongTeamId(req.params.teamId)
            const matchingTeamList = await matchingService.matchingTeamsId(req.params.teamId)    

            var userProfileDataList = Array()
            var matchingDataList = Array()

            for(var i =0; i<teamBelongUserList.length; i++){
                const user = await await userService.getUserDetailByIdNumber(teamBelongUserList[i])
                userProfileDataList.push(user)
            }

            for(var i =0; i<matchingTeamList.length; i++){
                const user = await await teamService.searchTeamById(matchingTeamList[i].receive_team_id)
                matchingDataList.push(user)
            }


            return  res.status(201).json({
                "state" : 1,
                "message" : "성공",
                "data" : {
                    "teams":{
                        id: teamData[0].id,
                        name : teamData[0].name,
                        gender : teamData[0].gender, 
                        max_member_number : teamData[0].max_member_number,
                        created_at : teamData[0].created_at, 
                        update_at : teamData[0].update_at, 
                        is_delete : teamData[0].is_delete, 
                        users : teamBelongUserList, 
                        matching_team : matchingTeamList 
                    },
                    "users" : userProfileDataList,
                    "matching_team" : matchingDataList
            
                }
            })  


        }catch(error){
            console.log(error)
            res.status(202).json({
                "state" : 0,
                "message" : "실패",
                "data" : {}
            })
        }
    }





    const deleteTeam = async(req, res) => {
        const teamService = new TeamService()
    
        try{
                    
                const data = await teamService.deleteTeam(req.params.teamId); 

                return  res.status(201).json({
                    "state" : 1,
                    "message" : "성공",
                    "data" : {}
                })
    
        }catch(error){
            console.log(error.message)
            res.status(202).json({
                "state" : 0,
                "message" : "실패",
                "data" : {}
            })
        }
    }
    



module.exports = {
    searchTeam,
    searchTeamById,
    deleteTeam
}