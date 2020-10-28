const UserViewService = require('../services/UserViewService')
//const download = require('../utils/download')

// 프로필 심사 대상자 정보 목록 가져오기
const getProfileSubjectInfo = async (req, res) => {
    const userViewService = new UserViewService()
    try {
      const users = await userViewService.getProfileSubject()
      res.status(200)
      .json({
          "state" : 1,
          "message" : "성공",
          "data" : {
            "profileList" : users
          }
      })
    } catch (error) {
      res.status(202)
      .json({ 
          "state" : 0,
          "message" : "실패",
          "data" : {}
        })
    }
  }

  module.exports = getProfileSubjectInfo