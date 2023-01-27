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
    
    
    const addProducts = (products) => {
        setProducts([...products, {products}])
    }
  return (
    <div className='products'>
        <div>

            {
                products.map((products) => (
                    <ProductCard products={products} />
                ))
            }
            <h2>{products.pname}</h2>
            <h3>{products.des}</h3>
            <p>{products.stock}</p>
            <p>{products.cat}</p>
            <p>{products.price}</p>
        </div>
          <Product addProducts ={addProducts} />
    </div>
  )
}

export default  ProductCard;