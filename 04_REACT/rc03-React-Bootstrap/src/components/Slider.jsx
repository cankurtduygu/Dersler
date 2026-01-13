
import { Carousel } from 'react-bootstrap'

import img1 from '../img/slider01.jpg'
import img2 from '../img/slider02.jpg'
import img3 from '../img/slider03.jpg'
import './slider.css'

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={img1} text="First slide" alt='' width='100%'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} text="Second slide" alt='' width='100%'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} text="Third slide" alt='' width='100%'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider