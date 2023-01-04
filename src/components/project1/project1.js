import React, {useState} from 'react'
import "./style.css"
const Project1 = () => {
  
        const [data,setData] = useState(null)
        const [print,setPrint] =useState(false);
    
        function getData(val){
            setData(val.target.value.toUpperCase())
            setPrint(false)
        }
  return (
    <div className='PersonBox'>
            {
                print?
                <h1 className='PersonBox'>{data}</h1>
                :null
            }
            <input type="text" onChange={getData} />
            <button onClick={()=>setPrint(true)}>Print Value</button>             
    </div>
    
  )
}

export default Project1