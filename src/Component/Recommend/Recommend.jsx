import React, { useState } from 'react';
import './Recommend.css'
import Products from './../Products/Products';
import Button from '../CustomComponent/Button';
import { RxHamburgerMenu } from "react-icons/rx";
import Category from './../Sidebar/Category/Category';
import Price from './../Sidebar/Price/Price';
import Colors from './../Sidebar/Colors/Colors';

const Recommend = ({ handleClick, handleChange }) => {

  const [modal, setModal] = useState(false);
  const [style, setStyle] = useState('');

  const toggleModal = () => {
    setModal(!modal);
    setStyle('active-modal')
    console.log("click");
  };

  // if (modal) {
  //   document.body.classList.add('active-modal')
  // } else {
  //   document.body.classList.remove('active-modal')
  // }

  return (
    <div className='recohead'>

      <div className="">
        <h2 className='recommended-title'>Recommended</h2>
        <div className="recommended-flex">

          <div className="burger" onClick={toggleModal}>
            <Button className="" onClickHandler={handleClick} value="" title={<RxHamburgerMenu />} />
          </div>
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>

      <>
        {/* <button onClick={toggleModal} className="btn-modal">
        Open
      </button> */}

        {modal && (
          <div className="modal" style={{ style }}>
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">

              <div className="sidebar">
                <Category handleChange={handleChange} />

                <Price handleChange={handleChange} />
                
                <Colors handleChange={handleChange} />
              </div>

              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>

        )}

      </>

    </div>
  );
};

export default Recommend;