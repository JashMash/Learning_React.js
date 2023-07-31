import React from "react";

import long_exposure_img from "./imgs/samuele-errico-piccarini-t4OxCpKie70-unsplash.jpg"

function Photography(){
    return (
        <>
            <div className="row">
                <div className="col">
                    <img src={long_exposure_img} alt="Long Exposure Italy" width="600px"></img>
                </div>
                <div className="col">
                    <h2>Photography</h2>
                    <p>
                        I love Photography, some of the specific styles would be long exposure and night time photography.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Photography;