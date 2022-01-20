import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
const api= "https://ganjgah.ir/api/ganjoor/poem/random?poetId=";


function Poem() {
    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get(api)
               .then(res => setData(res.data)) 
        }, [])

       


    return (

        <div>
            
            <img src='./img/6.jpg' className='background' ></img>
            <img src='./img/7.png' className='r'></img>

            <div className='lft'>
                <div className='poem'>
                   <h1>{data.fullTitle}</h1>
                   <br/>
                   <p>{data.plainText}</p>

                </div>
            </div>
            <p>

            </p>
        </div>
    )
}

export default Poem
