const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Payment = new schema({

 total : {
       type : String,

       },     

tax : {
       type : String,

       },
totalAmount : {
      
       type : String,

       },

   
})

const Billing = mongoose.model('card',Card);
module.exports = Billing;