import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsBagHeartFill } from "react-icons/bs";


const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
    return (
        <div>
             <section className="card">
                    <img className='card-img' src={img} alt={title} />
                    <div className="card-details">
                        <h3 className="card-title">{title}</h3>

                        <section className="card-reviesa">
                           {star} {star} {star} {star}
                            <span className='total-reviews'>{reviews}</span>
                        </section>

                        <section className='card-price'>
                            <del className="price">{prevPrice}</del>${newPrice}
                        </section>
                        <div className="bag">
                            <BsBagHeartFill className='bag-icon'/>
                        </div>
                    </div>
                </section>
        </div>
    );
};

export default Card;