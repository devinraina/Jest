import React from "react";

const Headline=(props)=>{

    const {header, desc} =props;

    if(!header){
        return null;
    }
     
    return(
        <div data-test="headlineComponent">
            <h1 data-test="headerTag">{header}</h1>
            <p data-test="descTag">
                {desc}
            </p>
        </div>
    )
}

export default Headline;