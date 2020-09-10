import User from './entities/User.entity'
import { Sequelize } from '../../node_modules/sequelize';

class UserViewModel {
  // 모든 사용자 가져오기
  async viewAllUser(){
    const row = await User.findAll({
      attributes:[
        'id',
        'name',
        'authenticated_address',
        'birth',
        'height',
        'is_thumbnailVerified',
        'gender',
        'created_at',
        'updated_at',
        'is_Deleted'
      ]
    })
    return row
  }

  // 검색된 사용자 가져오기
  async viewSearchedUser(data){
    const Op = Sequelize.Op;
    const row = await User.findAll({
      attributes:[
        'id',
        'name',
        'authenticated_address',
        'birth',
        'height',
        'is_thumbnailVerified',
        'gender',
        'created_at',
        'updated_at',
        'is_Deleted'
    ],
      // 쿼리 스트링 'search' 값에 따라 local_id 또는 name에서 해당 문자열을 포함하는 열 검색 
      where : {
        [Op.or] : {
          local_id : {
            [Op.like] : `%${data}%`
          },
          name : {
            [Op.like] : `%${data}%`
          }
        }
      }
    })
    return row
  }

  // 로컬 id 또는 이름으로 검색하여 가져오기
  // async viewUserByIdName(data){
  //   const row = await User.findAll({
  //     where : {
  //       [Op.or] : [
  //         {local_id : data.id}, 
  //         {name : data.name}
  //       ]
  //     }
  //   })
  //   return row
  // }

  async viewDetailUserById(data){

    const row = await User.findOne({
      attributes:[
        'name',
        'created_at',
        'authenticated_address',
        'birth',
        'is_deleted',
        'gender',
    ],
    where: {
        local_id: data 
    }
    })
    return row 
  }
}

module.exports = UserViewModel
