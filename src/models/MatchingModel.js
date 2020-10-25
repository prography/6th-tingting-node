import Matching from './entities/Matching.entity'
import { Sequelize } from '../../node_modules/sequelize';


class MatchingModel{

    async matchingTeamsById (data) {

        const member = await Matching.findAll({
            attributes : [
                'receive_team_id'
              ],
              where:{
                send_team_id : data
              }
           
          })
          
          return member
    }

 
}
module.exports = MatchingModel