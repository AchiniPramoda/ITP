const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Card = new schema({

  cardName : {
       type : String,
       required : true
       },
  cardNo : {
       type : String,
       required : true
  },
  
  expireDate : {
       type : String,
       required : true
       },

cvv : {
       type : String,
       required : true
       },


   
})

const Billing = mongoose.model('card',Card);
module.exports = Billing;