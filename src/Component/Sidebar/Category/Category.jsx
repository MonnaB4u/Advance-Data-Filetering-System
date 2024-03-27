import React from 'react';
import './Category.css'
import Input from '../../CustomComponent/Input';


const Category = ({ handleChange }) => {

    return (
        <div style={{margin:"0 .5rem"}}>
            <h2 className="sidebar-title">Category</h2>



            <label htmlFor="" className='sidebar-label-container'>
                <input onChange={handleChange} value="" type="radio" name='test' />
                <span className='checkmark'></span>All
            </label>
            <Input
                handleChange={handleChange}
                value="flats"
                title="Flats"
                name="test"
            />

            <Input
                handleChange={handleChange}
                value="sandals"
                title="Sandals"
                name="test"
            />
            <Input
                handleChange={handleChange}
                value="heels"
                title="Heels"
                name="test"
            />


        </div>
    );
};

export default Category;