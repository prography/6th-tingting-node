const UserViewService = require('../services/UserViewService')

const acceptUserThumbnail= async(req, res) =>{

    const userViewService = new UserViewService()

    try{
        const userData = req.params.userId  


        const data = await userViewService.acceptUserProfileImage(userData)
        

        if(data){

            res.status(200).json({
                "state" : 1,
                "message" : "성공",
                "data" : {
                }
            })

        }

    }catch(error){
        const errorMessage ="사용자를 찾을 수 없습니다."
        
        res.status(202).json({
            "state" : 0,
            "message" : "실패",
            "data" : {}
        })
    }


 }

 const rejectUserThumbnail= async(req, res) =>{

    const userViewService = new UserViewService()

    try{
        const userData = req.params.userId  

        const data = await userViewService.rejectUserProfileImage(userData)
    
        if(data){
            
            res.status(200).json({
                "state" : 1,
                "message" : "성공",
                "data" : {
                }
            })

        }


    }catch(error){
        const errorMessage ="사용자를 찾을 수 없습니다."
        
        res.status(202).json({
            "state" : 0,
            "message" : "실패",
            "data" : {}
        })
    }


 }

 module.exports = {
    acceptUserThumbnail,
    rejectUserThumbnail
}