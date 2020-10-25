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

    // 검색한 사용자 가져오기
    async getSearchedUserList (data) {
        try{
            const viewSearchedUser = await this.userViewModel.viewSearchedUser(data)
            return viewSearchedUser
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

    
    async getUserDetailByIdNumber(data){

        try{
            const viewUser = await this.userViewModel.viewDetailUserByIdNumber(data)

            return viewUser 
        } catch(error){
            console.log(error)
            throw new Error(error)
        }
    }

    async acceptUserProfileImage(data){
        
        try{
            const viewUser = await this.userViewModel.agreeUserProfileImage(data)
            return viewUser 
        } catch(error){
            console.log(error)
            throw new Error(error)
        }
    }

    async rejectUserProfileImage(data){
        
        try{
            const viewUser = await this.userViewModel.rejectUserProfileImage(data)
            return viewUser 
        } catch(error){
            console.log(error)
            throw new Error(error)
        }
    }


    async deleteUser(data){

        try{
            const user = await this.userViewModel.deleteUser(data) 
            return user 
            
        }   catch(error){
            console.log(error)
            throw new Error(error)
        }
    }

    async isProfileReview(){

        try
        {
            
            const profileList = await this.userViewModel.profileReivewTarget()
            return profileList

        }catch(error){
            console.log(error.message)
            throw new Error(error)
        }
    }

}

module.exports = UserViewService