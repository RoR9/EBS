import React from "react";


export default function TableBody(props){
    
    return(
        <tbody>
        {props.tableData.map((data) => {
         return (
          <tr key={data.id}>
           {props.columns.map(({ accessor }) => {
            let tData = data[accessor] ? data[accessor] : "——"
            if(accessor==="category"){
                tData=data["category"]["name"]
            }
            return <td key={accessor}>{tData}</td>;
           })}
          </tr>
         );
        })}
       </tbody>
        
    )
}