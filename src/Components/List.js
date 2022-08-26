import React from "react";
import { useState } from "react";
import TableHead from "./TableHead"
import TableBody from "./TableBody"

export default function List(){
  const [data,setData]=React.useState([])

    React.useEffect(()=>{
        fetch("http://localhost:3001/api/products/")
        .then((response) => {
          return response.json()
          })
          .then((data) => {
            setData(data);
          });

    },[])
    console.log(data)

  const columns = [
    { label: "Category", accessor: "category",sortable:true },
    { label: "Name", accessor: "name",sortable:false },
    { label: "Price", accessor: "price",sortable:true },
    { label: "Actions", accessor: "actions",sortable:false },

   ];

   const handleSorting = (sortField, sortOrder) => {
    console.log(sortField)
    if (sortField) {
      const sorted = [...data].sort((a, b) => {
        if(sortField==="category"){
          return(
            a[sortField]["name"].toString().localeCompare(b[sortField]["name"].toString(), "en", {
              numeric: true,
             }) * (sortOrder === "asc" ? 1 : -1)
          )
        }
       return (
        a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
         numeric: true,
        }) * (sortOrder === "asc" ? 1 : -1)
       );
      });
      setData(sorted);
     }
   };

    return(
        <>
         <table className="table">
          <caption>
           Sorted List
          </caption>
          <TableHead columns={columns}  handleSorting={handleSorting}  />
           <TableBody columns={columns} tableData={data} /> 
         </table>
        </>
       );
    
}