import React from 'react'
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

import axios from 'axios'
import Fal from './Fal';

function Faal() {
    const [txt, setTxt] = useState([]);
    const [audio, setAudio] = useState("");
    const [title, setTitle] = useState("");
    useEffect(() => {
       

        axios.get("https://ganjgah.ir/api/ganjoor/hafez/faal")
            .then(resp => {
                const recitations = resp.data.recitations;
                const verses = resp.data.verses;
                setTitle(recitations[0].audioTitle);
                setTxt(verses);
                setAudio(recitations[0].mp3Url);

            }
            )


        


    }, [])



    return (
        <div className='fal-container'>
            <img src="./img/2.png" />
            <div className='fal'>
                <h1>{title}</h1>
                <pre id='f'>
                    {
                        txt.map((t) => {
                            return <Fal key={t.id} {...t} />
                        })}

                   </pre>
                <audio controls src={audio} ></audio>


                <p>
                    <h2>:ای صاحب فال</h2>
                    هر قدر به خدا نزدیکتر شوید درد زمانه را کمتر حس می کنید و هر قدر هم درویشانه زندگی کنید بهتر سر و سامان می گیرید. اما شما فردی عجول و بی طاقت هستید و هر ضرری که می بینید به خاطر عجله ی بی مورد خودتان می باشد. زیاد حرص می خورید از این مسئله حذر کنید. خداهر چه که لایق آن باشید به شما می دهد
                </p>
                <Link to="/" className='ret'>بازگشت به صفحه اصلی</Link>
            </div>
        </div>
    );
}

export default Faal
