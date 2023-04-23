const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Card = new schema({

  cardName : {
       type : String,
    
       },
  cardNo : {
       type : String,
      
  },
  
  expireDate : {
       type : String,
      
       },

cvv : {
       type : String,
       
       },


   
})

const Billing = mongoose.model('card',Card);
module.exports = Billing;