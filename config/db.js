const mongooose = require("mongoose")
require("dotenv").config()


const connection = mongooose.connect(process.env.mongoURL)


module.exports = {
    connection
}