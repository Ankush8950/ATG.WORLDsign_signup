import React from 'react'
import "./PostData.css"
import Card from './Card'
import { Postdata } from './PostDataapi'
import Group from '../Group/Group'

const PostData = () => {

    return (
        <>
        <div className="create">
        </div>
          <div className="postdata">
          <div className="container-fluid">
            <div className="row">
                <div className="col-sm-9 col-md-6 col-lg-7">
                    {
                        Postdata.map((val) =>{
                            return <Card 
                                key={val.id}
                                title={val.title}
                                titlehead={val.titlehead}
                                img1={val.img1}
                                img2={val.img2}
                                names={val.names}
                            />
                        })
                    }
                </div>
                <div className="col-sm-3 col-md-6 col-lg-4">
                    <Group />
                </div>
            </div>
            </div>
        </div>

        </>
    )
}

export default PostData;
