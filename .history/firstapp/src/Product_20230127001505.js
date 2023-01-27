import './Product.css';
import {  useState } from 'react';
function Product({addProducts}){
    const [pname,setPname]=useState("");
    const [des,setDes]=useState("");
    const [stock,setStock]=useState(false);
    const [cat,setCat]=useState("");
    const [price,setPrice]=useState("");

    const resetForm = (event) =>{
        event.preventDefault();
       addProducts(pname, des, stock, cat,price);
    }

    return(
        <div>
            <div className="form">
                <h1>Create New Project</h1>

                <form>
                    Product Name:<br/>
                    <input type="text"
                    required
                    ></input><br/>
                    Description:<br/>

                    <input type="text" required
                    value={des}
                    onChangeProduct ={(e) =>{
                      setDes(e.target.value)}}></input><br />

                    <label class="switch">
                    <input type="checkbox"
                     required
                    value={stock}
                    onChangeProduct ={(e) =>{
                      setStock(e.target.value)}}/>
                    <span class="slider round"></span>
                    </label>
                    In stock
                    <br />

                    Category<br/>
                    <select 
                    required
                    value={cat}
                    onChangeProduct ={(e) =>{
                    setCat(e.target.value)}}>
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
                    value={price}
                    onChangeProduct ={(e) =>{
                      setPrice(e.target.value)}}/>
                    <br/>

                    <button onClick={resetForm}>Create New Project</button>
                </form> 
               
            </div>

      
     
        </div>
    );
}
export default Product;