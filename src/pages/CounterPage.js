import React from "react";

import MainLayout from "../layout/MainLayout.js"
import Counter from "../components/Counter.js";

const CounterPage =()=>{

    return(
        <>
        <MainLayout>
            <Counter/>
        </MainLayout>
        
        </>
    )
}

export default CounterPage;