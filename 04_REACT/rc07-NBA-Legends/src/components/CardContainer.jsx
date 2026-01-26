import React, { useState } from 'react'
import { Container, Form, Row, Col  } from 'react-bootstrap';
import {data} from '../helper/data';
import Player from './Player';


const CardContainer = () => {


    const[ara, setAra] = useState("");
    const[tikla, setTikla] = useState(false);
    const [dizi, setDizi] = useState(data)

    const tiklandi =(id) => {
        filtrelenmisData = data.filter((a,index)=>index===id);
  
    }


    //!1.yol
   let filtrelenmisData = data.filter((a) => a.name.includes(ara));


   

  return (
    <>
        <Form.Control 
        className='w-50 m-auto' 
        type="text" 
        placeholder="Search NBA Legends" 
            onChange={(e) => setAra(e.target.value)}
        />
        <Container className='kart-container rounded mt-4 p-3'>
            <Row className='g-3'>
            {filtrelenmisData.map((oyuncu, index) => (
                <Col 
                onDoubleClick={()=>tiklandi(index)}
                xs={12} sm={12} md={6} lg={3} key={index}>
                    <Player {...oyuncu}  />
                </Col>
            ))}

            </Row>
        </Container>
    </>
  )
}

export default CardContainer