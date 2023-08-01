import React from "react";


const Counter = () =>{
    const [count, setCount] = React.useState(0);

    const onButtonClicked = () => {
        setCount(count + 1);
    }

    return(
        <>
        <p>
            Count: {count}
        </p>
        <button type='button' onClick={onButtonClicked}>Click to Count</button>
        </>
    )
}

export default Counter;