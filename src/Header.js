import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import headerimage from './img/header image.jpg';

function HeaderPage(){
    const [index, setIndex] = useState(1);
    const handleSelect = (selectedIndex, e) =>{
        setIndex(selectedIndex);
    }
    return(
       

        <div>
                <div className='container-fluid' >
                    <div className="row">
              
                    </div>
                    <div className="row">
                        <div className="col-12-1">
                            <Carousel>
                        
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={headerimage}
                                        alt="First slide"
                                    />
                                
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={headerimage}
                                        alt="Second slide"
                                    />

                                    
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={headerimage}
                                        alt="Third slide"
                                    />
                                    
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default HeaderPage;