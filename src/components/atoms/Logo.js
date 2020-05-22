import React from 'react'
import styled from 'styled-components';

const Logo = () => {
  return (
    <LogoWrapper>
      <h1>Gadget<span>Store</span></h1>
    </LogoWrapper>
  )
}

const LogoWrapper = styled.h1`
  h1 {
    font-size: 1.5rem;
    cursor: pointer;
    /* margin: 0 20px; */
    span {
      color: var(--primaryColor);
      font-family: cursive;
    }
  }
`

export default Logo
