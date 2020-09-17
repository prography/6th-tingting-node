const { json } = require("body-parser");
const TeamService = require("../services/TeamService")


const  searchTeam = async(req, res) => {
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

module.exports = {
    searchTeam
}