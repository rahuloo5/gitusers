import React from 'react'
import './infoData.css'

const InfoData=({icon,repos,title,color})=> {
    return ( 
        <div className="infodatacontainer">
            <div className="infoicon">
                {icon}
                </div>
                <div className="infodetails">
                    <div style={{flexDirection:'column' , marginLeft:9}}>
                    <div> <h1>{repos}</h1> </div>
                  <div><h2>{title}</h2></div>
                  </div>
                    

                </div>



            
        </div>
    )
}

export default InfoData
