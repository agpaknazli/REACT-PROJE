

import data from "../helper/data";



const Picture=()=>{

 return(

    
    data.map((card)=>{
return(
<div className= "pictures col-md-6 col-lg-4 col-xl-3 col-xxl-2">

        <h3>{card.name}</h3>
        <img src={card.img} alt="" />
            </div>

)
})

)};

export default Picture;