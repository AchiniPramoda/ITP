
import React from "react";
import axios from "axios";

import './card.css';
import  {Alert} from './Alert';
import Validation from './validationCard';


export default class Add extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = {            
              cardName : '',
              cardNo : '',
              expireDate : '',
              cvv : '',
           
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
                       cardName : this.state.cardName,
                             cardNo : this.state.cardNo,
                                   expireDate : this.state.expireDate,
                                               cvv : this.state.cvv,

                  
              });
      
             
           if(result.status){
             
              const card = {
                  cardName : this.state.cardName,
                  cardNo : this.state.cardNo,
                  expireDate : this.state.expireDate,
                  cvv : this.state.cvv,
              }
      
              axios.post('http://localhost:8070/card/add', card)
              .then(res => console.log(res.data));
      
              this.setState({
                  cardName : '',
                  cardNo : '',
                  expireDate : '',
                  cvv : '',
              })
              Alert("success", "Card Added Successfully");
                 }else{
                       Alert("error", "Something went wrong.", result.error)        
                       }
               }

       render(){

              return(
              <div className="container">
                     <div className="row">
                     <div className="col-md-6 mt-5 mx-auto">
                            <form noValidate onSubmit={this.onSubmit}>
                                   <h1 className="h3 mb-3 font-weight-normal">Add Card</h1>
                                   <div className="form-group">
                                   <label htmlFor="cardName">Card Name</label>
                                   <input type="text"
                                   className="form-control"
                                   name="cardName"
                                   placeholder="Enter Card Name"
                                   value={this.state.cardName}
                                   onChange={this.onChange}
                                   />
                                   </div>
                                   <div className="form-group">
                                   <label htmlFor="cardNo">Card No</label>
                                   <input type="text"
                                   className="form-control"
                                   name="cardNo"
                                   placeholder="Enter Card No"
                                   value={this.state.cardNo}
                                   onChange={this.onChange}
                                   />
                                   </div>
                                   <div className="form-group">
                                   <label htmlFor="expireDate">Expire Date</label>
                                   <input type="text"
                                   className="form-control"
                                   name="expireDate"
                                   placeholder="Enter Expire Date"
                                   value={this.state.expireDate}
                                   onChange={this.onChange}
                                   />
                                   </div>
                                   <div className="form-group">
                                   <label htmlFor="cvv">CVV</label>
                                   <input type="text"
                                   className="form-control"
                                   name="cvv"
                                   placeholder="Enter CVV"
                                   value={this.state.cvv}
                                   onChange={this.onChange}
                                   />
                                   </div>
                                   <button type="submit" className="btn btn-lg btn-primary btn-block">
                                   Add Card
                                   </button>
                            </form>
                     </div>
                     </div>
              </div>
              )
       }      
}
