import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Card from './pages/Card';


function App() {

    return(
        <BrowserRouter>
          <Routes>
              <Route path="/card" element={<Card />} />
         </Routes>
   
        </BrowserRouter>
      );
   }

export default App;