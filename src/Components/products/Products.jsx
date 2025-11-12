import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Products() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    async function getProducts() {
        try {
            const response = await fetch(`${import.meta.env.VITE_APIURL1}/products`, { method: 'GET' });
            const data = await response.json();
            // console.log(data.products);
            setProducts(data.products);
        } catch (err) {
            setError(err.message)
        }
    }

    useEffect(function () {
        getProducts();
    }, [])

    if (error) {
        return <>
            <h1 className='text-danger'>{error}</h1>
        </>
    }

    if (products.length === 0) {
        return <>
            <h1>Loading ...</h1>
        </>
    }

    return <>
        <table width={`100%`} border={`2px`}>
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
                {products.map(function (product) {
                    return <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.category}</td>
                        <td>{product.brand}</td>
                        <td><img src={product.thumbnail} alt="" width={`200px`} height={`200px`} /></td>
                        <td><Link className="btn btn-danger" to={`/detailsOfProduct/${product.id}`}>Detalis</Link></td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}

export default Products
