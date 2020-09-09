const loginByLocal = async (req, res) =>{

    const {
        body : {
            id, password
        } 
    }= req 

    //dotenv로 id 랑 password 변경 
    if(id == process.env.ADMIN_ID && password == process.env.ADMIN_PASSWD){
        
        const data = {
            message: '성공',
            state: 1, 
            data : {} 
          }
          res.status(201).json({data})
    }else{

        const data = {
            message: '실패',
            state: 0, 
            data : {} 
          }
    return res.status(401).json({data})
    }
}

module.exports = {loginByLocal}