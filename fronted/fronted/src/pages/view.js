import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import  Navbar from './NavBar';
import './view.css';

export default class View extends React.Component {



       render(){

              return(
                     <div>
                            <br/>
                     <Navbar />  
            
              <div class="vertical-center">
              <Link to="/viewCard">
              <button>Edit Card Details</button>
              </Link>
              </div>
              <div class="vertical-center">
              <button>Edit Payment Options</button>
              </div>
              <div class="vertical-center">
              <button>Show Transaction Records</button>
              </div>
             
              {/* add 3 buttons  */}
              </div>
              )
       }

}
