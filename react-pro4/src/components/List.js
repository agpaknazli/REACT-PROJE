import React from "react";
import data from "../helper/data";


const List = () => {


  return (
 <>
    {data.map((item)=>{

return(
<article className="person">
        <img src={item.image} alt={"name"} />
        <div>
          <h4>{item.name}</h4>
          <p>{item.email}</p>
          <p>{item.age} years</p>
        </div>
      </article>
)
})
    }
   
</>

      
    
  );
};

export default List;
