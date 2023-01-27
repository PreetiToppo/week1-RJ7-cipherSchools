import './Product.css';
import {  useState } from 'react';
function Product({addProducts}){
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

    const resetForm = (event) =>{
        event.preventDefault();
       addProducts(product);
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

      
     
        </div>
    );
}
export default Product;