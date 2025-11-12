import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function DetailsOfProduct() {

    const { id } = useParams();
    // console.log(id);

    const [product, setProduct] = useState([]);
    const [error, setError] = useState(null);

    async function getProduct() {
        try {
            const response = await fetch(`${import.meta.env.VITE_APIURL1}/products/${id}`, { method: 'GET' });
            const data = await response.json();
            // console.log(data);
            setProduct(data);
        } catch (err) {
            setError(err.message)
        }
    }

    useEffect(function () {
        getProduct();
    }, [])

    if (error) {
        return <>
            <h1 className='text-danger'>{error}</h1>
        </>
    }

    if(product.length === 0){
        return <>
            <h1>Loading ...</h1>
        </>
    }

    return <>
        <table width={`100%`}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Images</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.category}</td>
                    <td>{product.brand}</td>
                    <td><img src={product.thumbnail} alt=""  width={`200px`} height={`200px`} /></td>
                </tr>
            </tbody>
        </table>        
    </>
}

export default DetailsOfProduct
