

import data from "../helper/data";



const Picture=()=>{

 return(
 <div className="">
 
 {data.map((item)=>(
<h1>{item.name}</h1>
))};
 


<div className="pictures">

<div className="imageContainer">

<img src="" alt="" />

    
</div>





</div>



 
 
</div>

 );
};

export default Picture;