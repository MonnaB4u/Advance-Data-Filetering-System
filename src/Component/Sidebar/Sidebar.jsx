import React from 'react';
import './Sidebar.css'


import Price from './Price/Price';
import Colors from './Colors/Colors';
import Category from './Category/Category';

const Sidebar = ({handleChange}) => {

    return (
        <div className='sidebarHead'>
            <section className="sidebar">
                <Category handleChange={handleChange}/>
                <Price handleChange={handleChange}/>
                <Colors handleChange={handleChange}/>

            </section>
        </div>
    );
};

export default Sidebar;