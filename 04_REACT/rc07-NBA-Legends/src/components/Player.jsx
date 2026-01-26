import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

const Player = ({name, img, statistics}) => {

    const [showResim, setShowResim] = useState(true)

    
  return (
    <Card className='rounded-2 m-auto player-kart' role="button" onClick={ () => setShowResim(!showResim) }>

    {showResim ? (
        <Card.Img  className="player-resim" variant="top" src={img} />
        ) : (

        <ul className='m-auto'>
        {statistics.map((puan, index) => (
            <li className='h5 list-unstyled text-start' key={index}>
            🏀{puan}</li>
        ))}
        </ul>

        )}
        <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  )
}

export default Player