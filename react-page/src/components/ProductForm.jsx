import React, { useState } from 'react';


function Product() {

  const [buyData, setBuyData] = useState({
    productname:'',
    firstName: '',
    lastname: '',
    identity: '',
    address: '',
    email: '',
    dateOfBirth: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(buyData);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setBuyData({ ...buyData, [name]: value });
  };
  
  return (
    <div>this is product
      <h3>Product name</h3>
      <br />
      <div>Product Detail</div>
      <br />

      <form onSubmit={handleSubmit}>

      <label>Product Name:
        <select type="option"  name="productname" value={buyData.productname} onChange={handleChange}>
          <option value="">--Please choose an option--</option>
          <option value="Option 1" >Option 1</option>
          <option value="Option 2" >Option 2</option>
          <option value="Option 3" >Option 3</option>
        </select>   
      </label>      
    <br/>
        <label>Firstname:
            <input type="text" 
            name="firstName" 
            value={buyData.firstName} 
            onChange={handleChange} />
        </label>
    <br/>
        <label>Lastname:
            <input type="text" 
            name="lastname" 
            value={buyData.lastname} 
            onChange={handleChange} />
        </label>
    <br/>
        <label>Identity:
            <input type="number" 
            name="identity" 
            value={buyData.identity} 
            onChange={handleChange} />
        </label>
    <br/>
        <label>Address:
            <input type="text"
            name="address" 
            value={buyData.address} 
            onChange={handleChange} />
        </label>
    <br/>
        <label>Email:
            <input type="email"
            name="email" 
            value={buyData.email} 
            onChange={handleChange} />
        </label>
    <br/>
        <label>Date of birth:
            <input type="date"
            name="dateOfBirth" 
            value={buyData.dateOfBirth} 
            onChange={handleChange} />
        </label>
    <br/>

      <button type="submit">Buy</button>
      </form>
    </div>
  )
}
  export default Product;