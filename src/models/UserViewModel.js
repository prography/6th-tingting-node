import User from './entities/User.entity'

class UserViewModel {
  // 모든 사용자 가져오기
  async viewAllUser(){
    const row = await User.findAll({})
    return row
  }
  // 로컬 id 또는 이름으로 검색하여 가져오기
  async viewUserByIdName(data){
    const row = await User.findAll({
      where : {
        [Op.or] : [
          {local_id : data.id}, 
          {name : data.name}
        ]
      }
    })
    return row
  }
}

module.exports = UserViewModel
