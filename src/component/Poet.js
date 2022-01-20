import React from 'react'
import Poem from './Poem';
import { Routes, Route, Link } from "react-router-dom";

const Poet = ({ name }) => (
    <div className='poet-img'>
        <p>{name}</p>
       <Link to="/Poem">
       <img src="https://api.ganjoor.net/api/ganjoor/poet/image/moulavi.gif"></img>

       </Link>
      
      <Routes>
          <Route path="/Poem" element={<Poem/>}></Route>
      </Routes>


    </div>

)

    ;

export default Poet
