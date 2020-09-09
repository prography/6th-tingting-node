const UserViewService = require('../services/UserViewService')

// 모든 사용자 목록 조회
const getUserList = async (req, res) => {
    const userViewService = new UserViewService()
    try{
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

// 로컬 id 또는 이름으로 검색하여 조회
const getUserByIdName = async (req, res) => {
    const userViewService = new UserViewService()
    // 성공시
    try{
        const userData = req.params.id
        const viewUser = await userViewService.getUserByIdName(userData)
        res.status(200).json({
            "state" : 1,
            "message" : "성공",
            "data" : {
                "users" : viewUser
            }
        })
    }
    // 실패시
    catch (error) {
        const errorMessage = "사용자를 찾을 수 없습니다."
        console.log(errorMessage)
        res.status(202).json({
            "state" : 0,
            "message" : "실패",
            "data" : {}
        })
    }
}

module.exports = {
    getUserList,
    getUserByIdName
}