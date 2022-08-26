import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import List from "Components/List"
import "./index.css"


export default function App(){
    // const [data,setData]=React.useState([])

    // React.useEffect(()=>{
    //     fetch("http://localhost:3001/api/products/")
    //     .then((response) => {
    //       return response.json()
    //       })
    //       .then((data) => {
    //         setData(data);
    //       });

    // },[])
    
    return(
        <List/>
    )
}