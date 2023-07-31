
import React from "react";

import sign_img from "./imgs/sign-Language-images-basic.jpg"
import long_exposure_img from "./imgs/samuele-errico-piccarini-t4OxCpKie70-unsplash.jpg"

function TodoList() {
    return (
        <>
        <div className="row">
            <div className="col">

            <h2>My Tasks:</h2>
            <ul>
                <li>Learn computer vision for hands</li>
                <li>Learn how map a hand orientation to a word output</li>
                <li>Understand what data I need to train the model</li>
                <li>Look into what would be best ML model to train a model</li>
                <li>Compare different models with tensor flow</li>
                <li>Look into using modular for the model training</li>
                <li>When a satisfactory success rate is achieved create a web app for it</li>
            </ul>
            </div>
            <div className="col">
                <img src={sign_img} alt="Sign Language" width='600px'></img>
                {/* <img src='../imgs/sign-Language-images-basic.jpg' alt="Sign Language"></img> */}
                {/* <img src={long_exposure_img} alt="Long Exposure Italy" width='200px'></img> */}

            </div>
        </div>
        </>
    );
};


export default TodoList;
