const express = require('express')

module.exports = function(server){
    // ULR para todas as bases:
    const router = express.Router()
    server.use('/api', router)

    //Rota de ciclho de pagamento:
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router,'/billingCycles')
}