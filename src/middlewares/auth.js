const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  // Bearer Token인지 검사 (자동 로그인)
  // try {
  //   const schema = req.headers.authorization
  //   if(schema.split(' ')[0] === 'Bearer'){
  //       const token = schema.split(' ')[1]
  //       req.token = jwt.verify(token, process.env.JWT_SECRET)
  //       return next()
  //   }
  // } catch (error) {
  //   // 토큰 만료
  //   if (error.name === 'TokenExpiredError') {
  //     console.log('토큰이 만료되었습니다.')
  //     return res.status(202).json({
  //       "state" : 0,
  //       "message" : "실패",
  //       "data" : {}
  //     })
  //   }
  //   // 유효하지 않은 토큰
  //   console.log('유효하지 않은 토큰입니다.')
  //   return res.status(202).json({
  //     "state" : 0,
  //     "message" : "실패",
  //     "data" : {}
  //   })
  // }
  return next()
}

module.exports = verifyToken
