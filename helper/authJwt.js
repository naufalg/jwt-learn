require("dotenv").config()
const jwt = require('jsonwebtoken');

module.exports = {
  authJwt: (req, res, next) => {
    const authHeader = req.headers.authorization
    console.log("header", authHeader);
    const token = authHeader.split(" ")[1]
    console.log("jwtToken", token)

    if (token == null) return res.json("token not found")

    try {
      const isTokenValid = jwt.verify(token, process.env.SECRET_KEY)
      console.log("Token", isTokenValid)
      if (isTokenValid) {
        let {password, ...rest} = isTokenValid

        req.body = rest
        next()
      }
    } catch (error) {
      res.json("token is not valid")
      console.log("token is not valid");
    }
  }
}
