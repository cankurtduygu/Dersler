import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';


const MyCard = ({ mydata }) => {
    // console.log(mydata);
    return (
        <Container>
            <Row className='g-3 mt-4 text-center'>
            {mydata.map((item) => {
                //!arrow (map) süslü kullandığında return ister.reactta süslü koymayabilirsiniz, o zaman returne de ihtiyaç olmaz
                return (
                    <Col className='col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center'>
                    <Card key={item.id} style={{ width: '18rem' }}>
                    {/* ?database den çekilen veriler ekrana bastırılırken, en dış div unique bir veri ister bunu da key={id} şeklinde yazarız. id olmak zorunda değil unique herhangi bir property olabilir, mesela img */}
                        <Card.Img className='mt-2' variant="top" src={item.img} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                {item.text}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                )

            })}

            </Row>
        </Container>
    )
}

export default MyCard