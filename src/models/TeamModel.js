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

}
module.exports = TeamModel