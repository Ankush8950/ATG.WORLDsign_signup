import React from 'react'
import { Recom } from './Recommendedap';
import "./Recommended.css"
import Card2 from './Card2/Card2';
import { BiLike } from "react-icons/bi";

const Recommended = () => {
    return (
        <>
        <div className="recomm">
        <p className="text-start"><BiLike />  RECOMMENDED GROUPS</p>

            {
                Recom.map((val,index)=>{
                    return <Card2 
                        key={index}
                        imgsrc={val.imgsrc}
                        namedata={val.namedata}
                        follower={val.follower}
                    />
                })  
            }
        </div>
        </>
    )
}

export default Recommended;
