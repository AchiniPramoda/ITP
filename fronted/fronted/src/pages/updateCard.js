import React, { useState } from "react";
import axios from "axios";
import "./card.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import  {Alert} from './Alert';
import Navbar from "./NavBar";
import Cards from "react-credit-cards";



function UpdateCard () {

   const [cardName, setCardName] = useState("");
       const [cardNo, setCardNo] = useState("");
       const [expireDate, setExpireDate] = useState("");
       const [cvv, setCvv] = useState("");
       const [card, setCard] = useState([]);
       // const { id } = useParams();
       // const [focus] = useState("");

       
    const params = useParams();
    
  const getCard = () => {
       axios.get(`http://localhost:8088/card/get/${params.id}`).then((res) => {
              // setCard(res.data);
              setCardName(res.data.cardName);
              setCardNo(res.data.cardNo);
              setExpireDate(res.data.expireDate);
              setCvv(res.data.cvv);
       }).catch((err) => {
              console.log(err);
       })
       }

       useEffect(() => {
              getCard();
       }, [])


               const update= (e) => {
                     e.preventDefault();
         
                     
                     let update = {
                               cardName : cardName,
                                    cardNo : cardNo,
                                          expireDate : expireDate,
                                                            cvv : cvv,

                  }
         
                     axios.put(`http://localhost:8088/card/update/${params.id}`, update)
                     .then((res) => {
                               console.log(res.data);
                                    Alert("success", "Card Updated Successfully!");
                                          window.location.href = "/viewcard";
                     }).catch((err) => {
                                    console.log(err);
                                          Alert("error", "Something went wrong!", err.response.data)
                     })
                     }


                     const {focus } = card
       return (
          
                                    <div>
                                  <Navbar/>
                           <div className="container">
                                 <div clasName="rccs__card rccs__card--unknown">
                                
                     <Cards
                       number={cardNo}
                       name={cardName}
                       expiry={expireDate}
                       cvc={cvv}
                       focused={focus}
                     />
                   </div>
             
                   <br />
                   <form noValidate >
                     <div className="row">
                       <div className="col-sm-11">
                         <label for="name">Card Number</label>
                         <input
                           type="text"
                           id="cardNo"
                           name="number"
                           className="form-control"
                           value={cardNo}
                           onChange={(e) => setCardNo(e.target.value)}

                       
                         ></input>
                       </div>
                     </div>
                     <br />
                     <div className="row">
                       <div className="col-sm-11">
                         <label for="name">Card Name</label>
                         <input
                           type="text"
                           id="cardName"
                           className="form-control"
                           value={cardName}
                           onChange={(e) => setCardName(e.target.value)}
                    
                         ></input>
                       </div>
                     </div>
                     <br />
                     <div className="row">
                       <div className="col-sm-6">
                         <label for="name">Expiration Date</label>
                         <input
                           type="text"
                           name="expiry"
                           id="expireDate"
                           className="form-control"
                               value={expireDate}
                               onChange={(e) => setExpireDate(e.target.value)}
                     
                         ></input>
                       </div>
                       <div className="col-sm-5">
                         <label for="name">CVV</label>
                         <input
                           type="text"
                           name="cvc"
                           id="cvv"
                           className="form-control"
                           value={cvv}
                           onChange={(e) => setCvv(e.target.value)}
                     
                         ></input>
                       </div>
                       <br />
                       <br />
                       <br />
                       <button type="submit"  onClick={update} className="btAdd">
                               Add Card
                       </button>
                       <br />
                       <br />
                     </div>
                   </form>
                           </div>
                           </div>
                           )
                    }      
             

export default UpdateCard;

             