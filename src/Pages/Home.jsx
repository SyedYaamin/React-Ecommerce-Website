import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Card from '../Components/Card';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.log("Error:", err))
    }, [])

    const singleProduct = (itemId) => {
        navigate(`/singleproduct/${itemId}`);
    }

    return (
        <>
            <div className='flex justify-center items-center gap-10 mt-10 flex-wrap'>
                {data.length > 0 ? (data.map((item) => {
                    return (
                        <Card key={item.id} title={item.title} description={item.description} price={item.price} image={item.image} showMore={() => singleProduct(item.id)} />
                    );
                })) : <span className="loading loading-spinner loading-lg"></span>}
            </div>
        </>
    )
}

export default Home;
