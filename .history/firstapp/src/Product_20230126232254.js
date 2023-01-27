import './Product.css';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
function Product(){
    // const [name,setName]=useState("");
    // const [des,setDes]=useState("");
    // const [stock,setStock]=useState(false);
    // const [cat,setCat]=useState("");
    // const [price,setPrice]=useState("");

    //To create a single state with object
    const [product,setProduct] = useState({
    pname : "",
    des : "",
    stock : "",
    cat : "",
    price : ""})

    const onChangeProduct =(e) =>{
      setProduct({...product,[e.target.name] : e.target.value})
    }

    async function getProduct(){
      const response = await fetch(`$`)
        const data = await response.json()
        setProduct(data.Product);
    }

    useEffect(() => {
      getProduct();
    },[]);

    const resetForm = (event) =>{
        event.preventDefault();
        const copyArray = [...product];
        copyArray.push(product);
        setProduct(copyArray);
        setProduct({
            pname : "",
            des : "",
            stock : "",
            cat : "",
            price : ""
        })
        console.log("the values"+ product.pname + product.des + product.stock + product.cat + product.price);
    }

    return(
        <div>
            <div className="form">
                <h1>Create New Project</h1>

                <form>
                    Product Name:<br/>
                    <input type="text"
                    required
                    value={product.pname}
                    name="pname"
                    onChange={onChangeProduct}></input><br/>
                    Description:<br/>

                    <input type="text" required
                    value={product.des}
                    name="des"
                    onChange={onChangeProduct}></input><br />

                    <label class="switch">
                    <input type="checkbox"
                     required
                    value={product.stock}
                    name="stock"
                    onChange={onChangeProduct}/>
                    <span class="slider round"></span>
                    </label>
                    In stock
                    <br />

                    Category<br/>
                    <select 
                    required
                    value={product.cat}
                    name="cat"
                    onChange={onChangeProduct}>
                        <option>Tshirt</option>
                        <option>Shirt</option>
                        <option>Jeans</option>
                        <option>Trouser</option>
                        <option>Jackets</option>
                        <option>Suit</option>
                        <option>Cap</option>
                    </select>
                    <br />
                    price<br/>

                    <input type="number" 
                    required
                    value={product.price}
                    name="price"
                    onChange={onChangeProduct}/>
                    <br/>

                    <button onClick={resetForm}>Create New Project</button>
                </form> 
               
            </div>

      
        <div className='container'>
          {/* to get all the movie cards */}
          {product.map((products) => (
            <ProductCard
            pname = {products.pname} 
            des = {products.des}
            stock = {products.stock}
            cat = {products.cat}
            price = {products.price}
             />
          ))}
    </div>
     
        </div>
    );
}
export default Product;