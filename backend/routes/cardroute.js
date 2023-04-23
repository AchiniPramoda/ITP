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


router.get('/', (req,res) => {

       try{
              const card =  Card.find();
              res.status(200).json(card);
       }catch(err){
              res.status(500).json({error : err});
       }
}
);

router.get('/:id', (req,res) => {
       
              try{
                     const card =  Card.findById(req.params.id);
                     res.status(200).json(card);
              }catch(err){
                     res.status(500).json({error : err});
              }
       }
       );
router.put('/:id',  (req,res) => {

              try{
                     const card =  Card.findById(req.params.id);
                     card.cardName = req.body.cardName;
                     card.cardNo = req.body.cardNo;
                     card.expireDate = req.body.expireDate;
                     card.cvv = req.body.cvv;
                     card.save();
                     res.status(200).json({status : "Card Updated Successfully"});
              }catch(err){
                     res.status(500).json({error : err});
              }
       }
       );
