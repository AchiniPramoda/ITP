const express = require('express');
const router = express.Router();

const Card= require('./../models/card');
const { response } = require('express');

router.post('/add', (req,res) => {
       try{
              const card = new Card({
              cardName : req.body.cardName,
              cardNo : req.body.cardNo,
              expireDate : req.body.expireDate,
              cvv : req.body.cvv,
              });
               card.save();
              res.status(200).json({status : "Card Added Successfully"});
       }catch(err){
              res.status(500).json({error : err});
       }
       }
);


router.get('/get', async (req, res, next) => {
       await Card.find()
       .then(card => res.json(card))
       .catch(err => err.json(err.message));
   } );
   

//get card by id
// router.get('get/:id', (req,res) => {

//        try{
//               const card =  Card.findById(req.params.id);
//               res.status(200).json(card);
//        }catch(err){
//               res.status(500).json({error : err});
//        }
// }
// );
       

router.get('/get/:id', (req, res) => {
       Card
       .findById(req.params.id)
       .then(response => res.json(response))
       .catch((err) => res.json(err.message));
   })
   router.put('/update/:id', (req, res) => {
       Card
       .findByIdAndUpdate(req.params.id)
       .then(response => {
                 response.cardName = req.body.cardName;
                       response.cardNo = req.body.cardNo;
                             response.expireDate = req.body.expireDate;
                                   response.cvv = req.body.cvv;
                 response.save()
                       .then(response => res.json(response))
                             .catch(err => res.json(err.message));
       })
       .catch(err => res.json(err.message));
       })
       router.delete('/delete/:id', (req, res) => {
              Card
              .findByIdAndDelete(req.params.id)
              .then(response => res.json(response))
              .catch(err => res.json(err.message));
              })


module.exports = router;