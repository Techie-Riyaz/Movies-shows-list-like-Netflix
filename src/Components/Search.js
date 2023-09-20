import React from 'react';

let selection=({options,handleSearch})=>{
   
    return (
    <div>
         <input style={{width:"500px",height:"40px",borderRadius:"10px"}}
          onChange={(e)=>handleSearch(e.target.value)} placeholder='search genres here..'
        />
    </div>
    )
    
}

export default selection;
