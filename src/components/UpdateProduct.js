import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setcompany] = useState('');
    const params=useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        getProductDetails();
    },[])

    const getProductDetails=async()=>{
        console.log(params);
        let result=await fetch(`http://localhost:5000/product/${params.id}`,{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`

            }
        });
        result=await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setcompany(result.company);
    }

    const updateProduct = async () => {
        console.log(name,price,category,company);
        let result= await fetch(`http://localhost:5000/product/${params.id}`,{
            method:'Put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':"application/json",
                 authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
       
            }
        });

        result=await result.json();
        console.log(result);
        navigate('/')

        

    }

    return (
        <div className="">
            <h1>Product Update </h1>
            <input className="inpurBox" type="text" text placeholder="Enter Product Name"
                value={name} onChange={(e) => { setName(e.target.value) }} />

            <input className="inpurBox" type="text" text placeholder="Enter Product Price"
                value={price} onChange={(e) => { setPrice(e.target.value) }} />

            <input className="inpurBox" type="text" text placeholder="Enter Product Category"
                value={category} onChange={(e) => { setCategory(e.target.value) }} />

            <input className="inpurBox" type="text" text placeholder="Enter Product Company"
                value={company} onChange={(e) => { setcompany(e.target.value) }} />
            <br />
            <button className="btn" type="text" onClick={updateProduct}>Update Product</button>
        </div>
    )
}
export default UpdateProduct;