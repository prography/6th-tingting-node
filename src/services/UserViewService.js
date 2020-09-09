const UserViewModel = require('../models/UserViewModel')

class UserViewService {
    constructor () {
        this.userViewModel = new UserViewModel()
    }

    // 모든 사용자 가져오기
    async getUserList () {
        try{
            const viewAllUser = await this.userViewModel.viewAllUser()
            return viewAllUser
        }
        catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    // 로컬 id 또는 이름으로 검색하여 가져오기
    async getUserByIdName (data) {
        try{
            const viewUser = await this.userViewModel.viewUserByIdName(data)
            return viewUser
        }
        catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    async getUserDetailById(data){

        try{
            const viewUser = await this.userViewModel.viewDetailUserById(data)
            
            return viewUser 
        } catch(error){
            console.log(error)
            throw new Error(error)
        }
    }
}

module.exports = UserViewService