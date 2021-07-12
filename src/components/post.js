import { Fragment } from "react";
import React  from 'react';

const post = (props)=>(
    <Fragment>
        <h2 className="text-3xl font-bold text-center mt-12">{props.title}</h2>
                    <div className="flex mt-8  overflow-x-scroll" >
                        {
                            props.data.map(el => (
                                <props.card element = {el} />
                            ))
                        }
                    </div>
    </Fragment>
)

export default post;