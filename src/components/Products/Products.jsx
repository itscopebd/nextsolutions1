import React, { useEffect } from 'react';

const Products = () => {
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => console.log(data))
    })
    return (
        <div>

        </div>
    );
};

export default Products;