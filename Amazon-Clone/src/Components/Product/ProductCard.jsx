import React from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './Product.module.css'
import { Link } from 'react-router-dom';
function ProductCard({product}) {
     if (!product) return null; 
    const { image, title, id, rating, price} = product;
  return (
    <div className= {`${classes.card__container}`}> 
        <Link to ={`/product/${id}`}>
            <img src={image} alt="" className={classes.img__container}/>
        </Link>
        <div>
            <h3>{title}</h3>
            <div className={ classes.rating}>
                {/*rating*/}
                <Rating value={rating?.rate || 0} precision={0.1} readOnly/>
                {/*count*/}
                <small>{rating?.count || 0}</small>
            </div>
            <div>
                {/*price*/}
                <CurrencyFormat amount = {price}/>
            </div>
            <button className={classes.button}>add to cart</button>
        </div>
    </div>
  )
}

export default ProductCard