import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";



function Categories() {
    let [category , setCategory]=useState([])
    async function getCategory(){
            const {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
            setCategory(data.data)
            console.log(data.data);
            

     }
     useEffect(()=>{
        getCategory()
     },[])
    
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        autoplay:true,
        autoplayspeed:1500,
        slidesToScroll: 1,
        // arrows:false
      };
      return (
        
       <div className="container">
        <h3>Shop popular categories</h3>
         <Slider {...settings}>
            {category.map((item)=>(

                <div>
                    <img src={item.image} className="w-100 px-1" height={200} alt="" />
                    <h4 className="text-center">{item.name}</h4>
                </div>
            ))}
            
            
            
        
        </Slider>
       </div>
      );
}

export default Categories;