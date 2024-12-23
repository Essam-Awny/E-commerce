
import React from "react";
import Slider from "react-slick";
import slider1 from '../../images/slideee1 (1).png'
import slider2 from '../../images/slideee1 (2).png'
import slider3 from '../../images/slideee1 (3).png'

 function  Mainslick () {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay:true,
        autoplayspeed:1500,
        slidesToScroll: 1,
        // arrows:false
      };
      return (
        <Slider {...settings}>
            <img src={slider1} alt="" />
            <img src={slider2} alt="" />
            <img src={slider3} alt="" />
        
        </Slider>
      );
    }
 
    


export default Mainslick