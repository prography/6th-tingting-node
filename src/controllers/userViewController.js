const UserViewService = require('../services/UserViewService')
const EmailService = require('../services/AvailableEmailService')

// 모든 사용자 목록 조회
const getUserList = async (req, res) => {
    const userViewService = new UserViewService()
    try{
        // 쿼리 스트링이 없을 경우 사용자 모두 조회
        if(Object.keys(req.query).length === 0){
            const viewUser = await userViewService.getUserList()
            // 성공시
            res.status(200).json({
                "state" : 1,
                "message" : "성공",
                "data" : {
                    "users" : viewUser
                }
            })
        }
        // 쿼리 스트링이 있을 경우 사용자 검색
        else{
            console.log(req.query.search, " 사용자 검색")
            const viewUser = await userViewService.getSearchedUserList(req.query.search)
            // 성공시
            res.status(200).json({
                "state" : 1,
                "message" : "성공",
                "data" : {
                    "users" : viewUser
                }
            })
        }
    }
    // 실패시
    catch (error) {
        const errorMessage = "사용자를 가져올 수 없습니다."
        console.log(errorMessage)
        res.status(202).json({
            "state" : 0,
            "message" : "실패",
            "data" : {}
        })
    }
}

//로컬 id 또는 이름으로 검색하여 조회
// const getUserByIdName = async (req, res) => {
//     const userViewService = new UserViewService()
//     // 성공시
//     try{
//         const userData = req.query.id
//         const viewUser = await userViewService.getUserByIdName(userData)
//         res.status(200).json({
//             "state" : 1,
//             "message" : "성공",
//             "data" : {
//                 "users" : viewUser
//             }
//         })
//     }
//     // 실패시
//     catch (error) {
//         const errorMessage = "사용자를 찾을 수 없습니다."
//         console.log(errorMessage)
//         res.status(202).json({
//             "state" : 0,
//             "message" : "실패",
//             "data" : {}
//         })
//     }
// }


const getUserByIdName = async (req, res) => {
    const userViewService = new UserViewService()
    const emailService = new EmailService()

    try{
        const userData = req.params.userId
     

        const viewUser = await userViewService.getUserDetailById(userData)

        const school = await emailService.getSchoolName(viewUser.authenticated_address) 
        //domain 

        const message = "성공" 
        
        if(viewUser.isDeleted == 1){
             message = "성공, 삭제 된 유저입니다."
        }

        res.status(200).json({
            "state" : 1,
            "message" : message,
            "data" : {
                name: viewUser.name, 
                created_at : viewUser.created_at, 
                school : school.name,
                isDeleted : viewUser.is_deleted,
                gender : viewUser.gender, 
                email: viewUser.authenticated_address,
            }
        })
    }
    // 실패시
    catch (error) {
        const errorMessage = "사용자를 찾을 수 없습니다."
        console.log(errorMessage)
        res.status(202).json({
            "state" : 0,
            "message" : errorMessage,
            "data" : {}
        })
    }
}


module.exports = {
    getUserList,
    getUserByIdName
}