import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Hero.css"

const Hero = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-style"

                        src="https://i.ibb.co/VjPMVyK/Hotel-4f710360-fill-1366x700-format-jpeg-jpegquality-80.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-uppercase">Best Way to Educate</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-style"
                        src="https://i.ibb.co/Y3RXvh7/What-position-is-right-for-me.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-uppercase">Train By World Class Chef</h3>
                        <p >We have best chef to teach you how to became a best chef</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-style"
                        src="https://i.ibb.co/Ld0fxTF/Chef.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-dark text-uppercase">Team make you strong</h3>
                        <p className="text-dark">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Hero;