import React from 'react'
import { data } from '../helper/data';
const LessonCard = () => {
  return (
    <div>


{data.map((item)=>{

return(
<div>
<img src={item.image} alt="icon" />

<div>
<h4>Lesson Name: {item.name}</h4>
<h4>Lesson Hour:{item.hour}</h4>

</div>

</div>
);


})
}






    </div>
  )
}

export default LessonCard;