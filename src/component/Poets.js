import React from 'react'
import { useEffect, useState } from 'react';
import Poet from './Poet';
const api="https://ganjgah.ir/api/ganjoor/poets"





function Poets() {
    const [nam, setNam] = useState([]);
    const [img, setImg] = useState([]);


    useEffect(() => {
        fetch(api)
            .then((res) => res.json())
            .then((data) => {
                setNam(data);
                console.log(data);
            })




    }, [])

    return (
        <div className='poets'>

            <img src='./img/6.jpg' className='background' ></img>
         
            <div className='lft'>

                <img src='./img/5.png' className='left'></img>

                {nam.length > 0 && nam.map(n =>
                (
                    <Poet key={n.id} {...n} />
                ))}
                

                {img.length > 0 && img.map(i =>
                (
                    <Poet key={i.id} {...i} />
                ))}  


            </div>


        </div>

    )
}

export default Poets
