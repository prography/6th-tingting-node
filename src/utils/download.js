const AWS = require('aws-sdk')

AWS.config.update({
    region : 'ap-northeast-2',
    accessKeyId : process.env.S3_ACCESS_KEY_ID,
    secretAccessKey : process.env.S3_SECRET_ACCESS_KEY,
})

const download = async(key) => {
    try{
        console.log(key)
        const params = { Bucket : process.env.BUCKET, Key : key}
        const s3 = new AWS.s3()
        return s3.getObject(params).createReadStream()
    }
    // 예외 처리
    catch(error){
        console.log(error)
        return false
    }
}

module.exports = download