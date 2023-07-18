import React from 'react';

const Card = ({singleData}) => {
   const {title,price,image,description,Rating }=singleData;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='h-96' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className='flex justify-between w-full'>
                    <p> <strong>Price:</strong> {price}</p>
                    <p className='text-right'> <strong>Rating:</strong> {Rating}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;