import React, { useEffect, useState } from 'react';
import Card from '../Card';

const Products = () => {
    const [data,setCard]=useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setCard(data))
    },[]);

    return (
        <div className='grid grid-cols-3 gap-5 my-5'>
           {
            data.slice(0,6).map(singleData=><Card key={singleData.id} singleData={singleData}></Card>)
           }
        </div>
    );
};

export default Products;