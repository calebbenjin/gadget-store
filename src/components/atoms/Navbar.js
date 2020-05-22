import React from 'react'
import { FaBars, FaCartPlus } from 'react-icons/fa';
import styled from 'styled-components';
import Logo from './Logo';
import { ProductConsumer } from '../../context'

const Navbar = () => {
  return (
    <ProductConsumer>
      {value => {
        const {cartItems, handleSidebar, handleCart} = value;
        return (
          <NavWrapper>
            <div className="nav-center">
              <FaBars className="nav-icon" onClick={handleSidebar} />
              <Logo />
              <div className="nav-cart">
                <FaCartPlus className="nav-icon" onClick={handleCart} />
                <div className="nav-items">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        )
      }}
    </ProductConsumer>
  )
};

const NavWrapper = styled.nav`
  position: --webkit-sticky;
  position: sticky;
  top: 0;
  padding: 0 3rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  z-index: 99;
  /* max-width: 1107%; */
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-icon {
      font-size: 1.5rem;
    }
  }
  .nav-cart {
    position: relative;
    .nav-items {
      position: absolute;
      top: -8px;
      right: -12px;
      background: var(--primaryColor);
      padding: 0px 5px;
      border-radius: 50%;
      color: var(--mainWhite);
      cursor: pointer;
    }
  }


`

export default Navbar
