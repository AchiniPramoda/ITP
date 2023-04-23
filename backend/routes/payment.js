const express = require('express');
const router = express.Router();

const Payment= require('./../models/payment');
const { response } = require('express');

router.post('/add', (req,res) => {
       try{
              const payment = new Payment({
              total : req.body.total,
              tax : req.body.tax,
              totalAmount : total+tax,
              });
               payment.save();
              res.status(200).json({status : "Payment Added Successfully"});
       }catch(err){
              res.status(500).json({error : err});
       }
       }
);


router.get('/', (req,res) => {
       
              try{
                     const payment =  Payment.find();
                     res.status(200).json(payment);
              }catch(err){
                     res.status(500).json({error : err});
              }
       }
);

router.get('/:id', (req,res) => {
              
                     try{
                            const payment =  Payment.findById(req.params.id);
                            res.status(200).json(payment);
                     }catch(err){
                            res.status(500).json({error : err});
                     }
              }
              );
router.put('/:id',  (req,res) => {
       
                            try{
                                   const payment =  Payment.findById(req.params.id);
                                   payment.total = req.body.total;
                                   payment.tax = req.body.tax;
                                   payment.totalAmount = req.body.totalAmount;
                                   payment.save();
                                   res.status(200).json({status : "Payment Updated Successfully"});
                            }catch(err){
                                   res.status(500).json({error : err});
                            }
                     }
                     );
module.exports = router;

