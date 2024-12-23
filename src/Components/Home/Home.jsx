import Categories from "../Categories/Categories";
import Mainslick from "../Mainslick/Mainslick";
import Product from "../Products/Products";

function Home() {
    return <>
    <div className="container">
    <Mainslick/>
    <Categories/>
    <Product/>
    </div>
    
    
    </>;
}

export default Home;