import Belongs from './entities/Belongs.entitiy'
import { Sequelize } from '../../node_modules/sequelize';


class BelongsModel{

    async searchTeamMemberById (data) {

        const member = await Belongs.findAll({
            attributes : [
                'user_id'
              ],
              where:{
                team_id : data
              }
           
          })
   
          return member

    }
 
}
module.exports = BelongsModel