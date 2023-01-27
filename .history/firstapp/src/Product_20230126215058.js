import './Product.css';
import Display from './Display';
import { useState } from 'react';
function Product(){
    const [name,setName]=useState("");
    const [des,setDes]=useState("");
    const [stock,setStock]=useState(false);
    const [cat,setCat]=useState("");
    const [price,setPrice]=useState("");

    const resetForm = (event) =>{
        event.preventDefault();
        console.log("the values"+ {name},{des},{stock},{cat},{price});
        { setName("")};
        {setDes("")};
        {setStock(false)};
        {setCat("")};
        {setPrice("")};

    }
    return(
        <div>
            <div className="form">
                <h1>Create New Project</h1>
                <form>
                    Product Name:<br/>
                    <input type="text"
                    required
                    value={name}
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}></input><br/>
                    Description:<br/>
                    <input type="text" required
                    value={des}
                    onChange={(e)=>{
                        setDes(e.target.value);
                    }}></input><br />
                    <label class="switch">
                    <input type="checkbox"
                     required
                    value={stock}
                    onChange={(e)=>{
                        setStock(e.target.checked);
                    }}/>
                    <span class="slider round"></span>
                    </label>
                    In stock
                    <br />
                    Category<br/>
                    <select 
                    required
                    value={cat}
                    onChange={(e)=>{
                        setCat(e.target.value);
                    }}>
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
                    onChange={(e)=>{
                        setPrice(e.target.value);
                    }}/>
                    <br/>
                    <button onClick={resetForm}>Create New Project</button>
                </form>
            </div>
        </div>
    );
}
export default Product;