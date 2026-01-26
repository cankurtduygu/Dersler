import React from 'react'
import { Container } from 'react-bootstrap';
import nbaLogo from '../assets/nba-logo.png';
import { Image } from 'react-bootstrap';

const Header = () => {
  return (
    <Container>
        <Image className="mx-auto d-block" src= {nbaLogo} />
        <h1 className='display-4 text-center'>NBA Legends</h1>
    </Container>
  )
}

export default Header