import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

function Products() {
    const [products , setProducts] = useState([])
    const [loading , setLoading] = useState(true)
  
   async function getProduct(){
    let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
    console.log(data.data);
    setProducts(data.data)
    setLoading(false)

    }

    useEffect(()=>{
        getProduct()
    } , [])
    if(loading) return <Loading/>
    return <div>
        <div className="container">
            <div className="row">
                {products.map(item=>(
                    <div key={item._id} className="col-md-2 cursor-pointer text-center rounded-3 p-3">
                    <div className="product py-1">
                        <img src={item.imageCover} className="w-100" alt="" />
                        <span className="text-main">{item.category.name}</span>
                        <h5 className="fw-bold">{item.title.split(' ').slice(0,2).join(' ')}</h5>
                        <div className="d-flex justify-content-between p-3">
                            <div>{item.price} EGP</div>
                            <div>
                            <i class="fa-solid fa-star rating-color"></i>
                                {item.ratingsAverage}
                            </div>
                        </div>
                        <button className="btn bg-main w-100 text-white ">Add TO Cart</button>

                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
    
    
    ;
}

export default Products;