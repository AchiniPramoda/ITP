import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Card from './pages/Card';
import View from './pages/cardview';
import Home from './pages/view';
import UpdateCard from './pages/updateCard';


function App() {

    return(
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/card" element={<Card />} />
              <Route path="/viewcard" element={<View />} />
              <Route path="/update/:id" element={<UpdateCard/>} />

         </Routes>
   
        </BrowserRouter>
      );
   }

export default App;