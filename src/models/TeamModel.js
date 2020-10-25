import Team from './entities/Team.entitiy'
import { Sequelize } from '../../node_modules/sequelize';


class TeamModel{

  async teamSearchAll(){

   const teams = await Team.findAll({

       attributes : [
           'id',
            'name',
            'chat_address',
            'owner_id',
            'gender',
            'place',
            'password',
            'is_verified',
            'max_member_number',
            'created_at',
            'is_deleted' ],

            limit : 5
   })
   return teams
  }

  async teamSearchByIdName(data){

    const Op = Sequelize.Op;

    const teams = await Team.findOne({

        attributes : [
            'id',
             'name',
             'chat_address',
             'owner_id',
             'gender',
             'place',
             'password',
             'is_verified',
             'max_member_number',
             'created_at',
             'is_deleted' ],
             where : {
                [Op.or] : {
                  name : {
                    [Op.like] : `%${data}%`
                  },
                  id : {
                    [Op.like] : `%${data}%`
                  }
                }
              }
    })

    return teams

  }


  async searchTeamById(data){

    
    const team = await Team.findAll({
      attributes : [
          'id',
         'name',
         'gender',
         'max_member_number',
         'created_at',
         'updated_at',
         'is_deleted'
        ],
        where:{
          id : data
        }
     
    })

   // console.log(team)
    return team
  }

  async deleteTeam(data){

    try{

      await Team.update({
        is_deleted : 1
       }, 
         {
            where:{
            id : data
         }
       })
 
       return true 
 
     }catch(error){
       return false 
       console.log(error)
     }

    }


}
module.exports = TeamModel