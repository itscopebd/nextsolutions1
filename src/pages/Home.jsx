import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Products from '../components/Products/Products';
import AboutOurProduct from '../components/AboutOurProduct/AboutOurProduct';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Products></Products>
            <AboutOurProduct></AboutOurProduct>
        </div>
    );
};

export default Home;