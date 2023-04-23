import React, { Component } from 'react';
import axios from "axios"
import ReactToPrint from 'react-to-print';
import "bootstrap/dist/css/bootstrap.min.css";
import './cardview.css';
import Navbar from "./NavBar";

import CardAcction from "./cardAcction";


class AllContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            FilterdCard: [],
            isGen: false
        }
    }

       UpdateContent=() =>{
              axios.get('http://localhost:8088/card/get').then(res => {
              this.setState({
                     cards: res.data,
                     FilterdCard: res.data
                 });
       }
       ).catch(err => {
              console.log(err);
          }
               )


       }
       componentDidMount() {
              this.UpdateContent();
          }
          search = (e) => {
              let searchTag = e.target.value.toLowerCase();

              let FilterdRoom = this.state.cards.filter((card) => {
                       return card.cardName.toLowerCase().includes(searchTag) ||
                       card.cardNo.toLowerCase().includes(searchTag) ||
                       card.expireDate.toLowerCase().includes(searchTag) ||
                       card.cvv.toLowerCase().includes(searchTag)

                       
             
              })
      
              this.setState({
                  FilterdRoom,
                  searchTag
              });
      
          }
     
      
          getRedirectButton = () => {
              return <button type="button" onClick={() => { window.location='/add' }} class="btn btn-outline-primary m-2">Create </button>
          }
      

       render() {

              return (
                     <div>
                     <Navbar />
                     <br/>
                   
                   
                     <div className="container-fluid mt-5">
            <div className='row'>
                   
                        {/* <div class="container-fluid">
                            <div class="d-flex">
                                <input onChange={(e) => this.search(e)} class="form-control me-2 form-group" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-warning form-group" type="submit">Search</button>
                            </div>
                        </div> */}
                    
                    </div>
                    <div ref={el => (this.componentRef = el)}>
                 
                        <h3 className={"text-secondary text-center mb-5"}>All Card details</h3>
                        <button type="button" onClick={() => { window.location='/card'}} className="add">Create</button>
                        <div class="table1">
                            <table class="table">
                                <thead className={"table-dark4"}>
                                    <tr>
                                          <th scope="col">Card Name</th>
                                          <th scope="col">Card No</th>
                                          <th scope="col">Expire Date</th>
                                          <th scope="col">CVV</th>
                                         {
                                                 !this.state.isGen ? <th scope="col">Action</th> : <React.Fragment />
                                         }
                                    </tr>
                                </thead>
                                <tbody>
                                    <React.Fragment>
                                        {
                                                 this.state.FilterdCard.map((card) => {
                                                 return <CardAcction card={card} isGen={this.state.isGen} UpdateContent={this.UpdateContent} />
                                                 })
                                        }
                                    </React.Fragment>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
           


                     <div className="row">
                            <div className="col-md-12">
                                   <div className="d-flex justify-content-end">
                                          <ReactToPrint
                                                 trigger={() => <button type="button" class="btn btn-outline-primary m-2">Print</button>}
                                                 content={() => this.componentRef}
                                          />
                                          {this.getRedirectButton()}
                                   </div>

                            </div>
                     </div>
                     </div>
              )
}

}

export default AllContainer;