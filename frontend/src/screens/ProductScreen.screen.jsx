import React from 'react';
// import { Link } from 'react-router-dom';
// import Rating from '../components/Rating.component';
import products from '../products';

const ProductScreen = ({ history, location, match }) => {
    const product = products.find(product => product._id === match.params.id);

    return <>{product.name}</>;
};

export default ProductScreen;
