import React from 'react';
import './Sidebar.css'
import { GiShoppingCart } from "react-icons/gi";

import Price from './Price/Price';
import Colors from './Colors/Colors';
import Category from './Category/Category';

const Sidebar = ({handleChange}) => {

    return (
        <div>
            <section className="sidebar">
                <div className="logo-container">
                    <h1><GiShoppingCart /></h1>
                </div>

                <Category handleChange={handleChange}/>
                <Price handleChange={handleChange}/>
                <Colors handleChange={handleChange}/>

            </section>
        </div>
    );
};

export default Sidebar;