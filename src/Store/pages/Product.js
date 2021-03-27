import React,{useState,useEffect} from 'react'
import Breadcrumb from '../../components/helper/Breadcumb/Breadcrumb'
import Footer from '../../components/helper/Footer/Footer'
import Navbar from '../../components/helper/Navbar/Navbar'
import Description from '../components/Description'

function Product({match}) {
    const [product,setProduct]=useState({})

    useEffect(()=>{
        const fetchItem=async()=>{
            const data=await fetch(`http://localhost:5000/product/${match.params.id}`);
            const items=await data.json();
            setProduct(items.data)
            console.log(product)
        }
        fetchItem();
    },[])
    return (
        <>
           <Navbar/>
           <Breadcrumb text="Product"/>
           <Description product={product}/>
           <Footer/> 
        </>
    )
}

export default Product
