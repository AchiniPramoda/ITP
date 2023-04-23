import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import axios from "axios";
import './card.css';
import  {Alert} from './Alert';
import Validation from './validationCard';
import Navbar from "./NavBar";


export default class Add extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = {            
           
              cardNo : "",
              cardName : "",
              expireDate : "",
              cvv : "",  
              
        }
       }

       handleError = (err) => {

              if (err) {
                  if (err.response) {
                      if (err.response.status === 404) {
                          Alert("error", "Something went wrong!", err.response.data)
      
                      }
                  } else {
                      Alert("error", "Something went wrong.", err)
      
                  }
              }
          }
               onChange = (e) => {
                       this.setState({[e.target.id]: e.target.value});
                       console.log(e.target.value);
                         }

               onSubmit =  (e) => {

                             e.preventDefault();
       
                             const result = Validation({
                                    cardNo : this.state.cardNo,
                                    cardName : this.state.cardName,
                                    expireDate : this.state.expireDate,
                                    cvv : this.state.cvv,
                             });
       
                             if(result.error){
                                    Alert("error", "Something went wrong.", result.error.details[0].message)
                                    return;
                             }
       
                             const card = {
                                    cardNo : this.state.cardNo,
                                    cardName : this.state.cardName,
                                    expireDate : this.state.expireDate,
                                    cvv : this.state.cvv,
                             }
       
                             axios.post('http://localhost:8088/card/add', card).then(res => {
                                    Alert("success", "Success", "Card Added Successfully")
                                   //  this.props.history.push('/cardview');
                             }).catch(err => {
                                    this.handleError(err);
                             });
       
                      }

       render() {

              return (
                     
                      <div>
                                  <Navbar/>
                           <div className="container">
                                 <div clasName="rccs__card rccs__card--unknown">
                                                 <Cards
                                                 cvc={this.state.cvv}
                                                 expiry={this.state.expireDate}
                                                 focused={this.state.focus}
                                                 name={this.state.cardName}
                                                 number={this.state.cardNo}
                                                 />
                                          </div>
                                          
      <br />
                                          
                                          
                                                 <form onSubmit={this.onSubmit}>
                                                 <div className="row">
                                                 <div className="col-sm-11">
                                                               <label htmlFor="cardNo">Card Number</label>
                                                               <input type="text" className="form-control" id="cardNo" placeholder="Enter Card Number" onChange={this.onChange} value={this.state.cardNo}/>
                                                 </div>
                                                 </div>
                                                 <br/>
                                                 <div className="row">
                                                 <div className="col-sm-11">
                                                               <label htmlFor="cardName">Name on Card</label>
                                                               <input type="text" className="form-control" id="cardName" placeholder="Enter Name on Card" onChange={this.onChange} value={this.state.cardName}/>
                                                 </div>
                                                 </div>
                                                 <br/>
                                                 <div className="row">
                                                 <div className="col-sm-6">
                                                               <label htmlFor="expireDate">Expire Date</label>
                                                               <input type="text" className="form-control" id="expireDate" placeholder="Enter Expire Date" onChange={this.onChange} value={this.state.expireDate}/>
                                                 </div>
                                                 
                                                 
                                                 <div className="col-sm-5">
                                                               <label htmlFor="cvv">CVV</label>
                                                               <input type="text" className="form-control" id="cvv" placeholder="Enter CVV" onChange={this.onChange} value={this.state.cvv}/>
                                                        
                                                 </div>
                                                 <br/>
                                                 <br/>
                                                 <br/>
                                                        <button type="submit" className="btAdd">Submit</button>
                                                        <br/>
                                                        <br/>
                                                        </div>
                              
                                                 </form>
                                          </div>
                                   </div> 
                                   
                         
                    
              )
       }
}
