import {useState} from 'react'


function Product() {
  const [name, setName] = useState('');

  const reset = () =>{
    setName({ name:""})
    console.log(name);
    }
  return (
    <div>s
        <h1>Product</h1>
        <form onSubmit={(event) => {
            event.preventDefault();
            console.log(name);
        }}>
            Product Name:<br/>
            <input type="text" value={name} onChange={(event) => {setName(event.target.value);}}></input><br />

            <input type="submit" value="Submit"></input>
            <input type="button" value="reset"></input>
        </form>
    </div>
  )
}

export default Product