
import './App.css';
import Faal from './component/Faal';
import Poets from './component/Poets';
import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Poem from './component/Poem';
function App() {

  return (
    <div >
      <ul>
        <li><img src="./img/4.png" /></li>
        
          <li>فال حافظ</li>
         <li>گنجینه اشعار</li>
        <li>درباره ما</li>
      </ul>
      <img src="./img/1.png" id="right" />
      <img src="./img/3.jpg" id='left' />

      <Link to="/Faal" className="btn">فال حافظ</Link>
      <Link to="/Poets" className="btn2">گنجینه اشعار</Link>
      <p id='t'>
        تاریخ کهن ایران زمین با پیشینه ای غنی از فرهنگ و هنر، از دیرباز با شعر و ادبیات درهم پیچیده و ایران، مهد پرورش شاعران بزرگی بوده<br /> و در گیر و دار فراز و نشیب هایی که در طول تاریخ بر آن گذشته، اما شاهنامه وزین پارسی پرور فردوسی بزرگ، اشعار روح بخش مولانا<br /> و عشق بازی اش با حق، غزل های عاشقانه و عارفانه عالم گیر در دیوان حافظ، اندیشه ژرف و عرفان ناب عطار نیشابوری همه و همه<br /> همچون مرهمی بر زخم های کوچک و بزرگش تسکین داده اند
      </p>




      <Routes>
        <Route path="/Faal" element={<Faal />} ></Route>
        <Route path="/Poets" element={<Poets />} ></Route>
        <Route path="/Poem" element={<Poem />} ></Route>

      </Routes>

    </div>

  );

}
export default App;
