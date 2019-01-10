const express = require('express')

module.exports = function(server) {
    const router = express.Router()
    server.use('/api', router)

    const BillingCycle = require('../api/coorporateCoffee/coorporateCoffeeService')
    BillingCycle.register(router, '/coorporateCoffee')
}