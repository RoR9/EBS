import React from "react";
import { useState } from "react";

export default function TableHead(props){
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");

    const handleSortingChange = (accessor) => {
    const sortOrder =
    accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    props.handleSorting(accessor, sortOrder);
       }

      

        return (
         <thead>
          <tr>
           {props.columns.map(({ label, accessor,sortable }) => {
             const cl = sortable
             ? sortField === accessor && order === "asc"
              ? "up"
              : sortField === accessor && order === "desc"
              ? "down"
              : "default"
             : "";
            return <th className={cl} key={accessor} onClick={sortable ? () => handleSortingChange(accessor) : null}>{label}</th>;
           })}
          </tr>
         </thead>
        );
       
      
}