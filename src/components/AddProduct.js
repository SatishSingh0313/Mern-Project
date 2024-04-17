import React, { useState } from "react"

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setcompany] = useState('');
    const [error, setError] = React.useState(false);

    const addProduct = async () => {
        console.log(!name);
        if (!name || !price || !category || !company) {
            setError(true)
            return false;
        }

        console.log(name, price, category, company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product", {
            method: 'post',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': 'application/json',
                 authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
    
            }
        });
        result = await result.json();
        console.log(result);
        console.log(userId);

    }
    
    return (
        <div className="add-product">
            <h1>Add Your Product </h1>
            <input className="inpurBox" type="" text placeholder="Enter Product Name"
                value={name} onChange={(e) => { setName(e.target.value) }} />
            {error && !name && <span className="invalid-input">Enter Valid Name</span>}

            <input className="inpurBox" type="" text placeholder="Enter Product Price"
                value={price} onChange={(e) => { setPrice(e.target.value) }} />
            {error && !price && <span className="invalid-input">Enter Valid Price</span>}

            <input className="inpurBox" type="" text placeholder="Enter Product Category"
                value={category} onChange={(e) => { setCategory(e.target.value) }} />
            {error && !category && <span className="invalid-input">Enter Valid Category</span>}

            <input className="inpurBox" type="" text placeholder="Enter Product Company"
                value={company} onChange={(e) => { setcompany(e.target.value) }} />
            {error && !company && <span className="invalid-input">Enter Valid Company</span>}
            <br />
            <button className="btn" type="text" onClick={addProduct}>Add Product</button>
        </div>
    )
}
export default AddProduct;