import {useState} from 'react'
import Product from './Product';

const ProductCard = () => {

    const [products,setProducts] = useState([{
        pname : "Product 1",
        des : "This is product 1",
        stock : "true",
        cat : "cat 1",
        price : "100"
    }
    ]);
    
    
    const addProduct = (pname) => {
        setProducts([...products, {pname}])
    }
  return (
    <div className='products'>
        <div>
            {products.map((product) => {
                return (
                    <div className='product' key={product.pname}>
                        <h3>{product.pname}</h3>
                        <h5>{product.des}</h5>
                        <h5>{product.stock}</h5>
                        <h5>{product.cat}</h5>
                        <h5>{product.price}</h5>
                    </div>
                )
            })}
            
        </div>
          <Product addProduct ={addProduct} />
    </div>
  );
}

export default  ProductCard;