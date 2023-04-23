import React from 'react';
import Swal from "sweetalert2";
import axios from 'axios';
import  './view.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Actions = (props) => {


    const card = props.card;

       const deleteCard = async (id) => {

              try {
              const response = await axios.delete(`http://localhost:8088/card/delete/${id}`);

              console.log(response);
              Swal.fire({
                     icon: 'success',
                     title: 'Card Deleted Successfully',
                     showConfirmButton: false,
                     timer: 1500
              });
              props.history.push('/cardView');
              } catch (err) {
              console.log(err);
              }      
       }

       
       const updateNavigate = (id) => {
              window.location = `/update/${id}`;  
           }
       const updateCard = async (id) => {

              try {
              const response = await axios.put(`http://localhost:8088/update/${id}`);
              console.log(response);
              Swal.fire({
                     icon: 'success',
                     title: 'Card Updated Successfully',
                     showConfirmButton: false,
                     timer: 1500
              });
              props.history.push('/card');
              } catch (err) {
              console.log(err);
              }      
       }

       return (
              <React.Fragment>
                     <tr>
                            <td>{card.cardName}</td>
                            <td>{card.cardNo}</td>
                            <td>{card.expireDate}</td>
                            <td>{card.cvv}</td>
                            {
                                  !props.isGen ? 
                                          <td>
                                                 <button className="success" onClick={() => updateNavigate(card._id)}>Update</button>
                                         
                                         
                                                 <button className="danger" onClick={() => deleteCard(card._id)}>Delete</button>
                                          


                                          </td>:  <React.Fragment />
                                         

                  

}
                     </tr>
              </React.Fragment>
       )
}


export default Actions;