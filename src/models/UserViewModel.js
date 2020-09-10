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

  async agreeUserProfileImage(data){
    try{

     await User.update({
      is_thumbnailverified : 1
      }, 
        {
           where:{
           local_id : data
        }
      })

      return true 

    }catch(error){
      return false 
      console.log(error)
    }
    
  }


  async rejectUserProfileImage(data){

    try{

      await User.update({
       is_thumbnailverified : 0
       }, 
         {
            where:{
            local_id : data
         }
       })
 
       return true 
 
     }catch(error){
       return false 
       console.log(error)
     }

    }
}

module.exports = UserViewModel
