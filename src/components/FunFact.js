import React from "react";

const FunFact =()=>{

    const fetch_fact =async()=>{
        // let fetched_fact = ""
        const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random", {"method":"GET"})
        
        if (response.status == 200){
            console.log("Fetch Successful!");
            const data = await response.json()
            set_fact(data.text);
            // return fetched_fact;
        } else {
            console.log(`Fetch: Some issue code:${response.status}  ${response.statusText}.`)
            // return "";
        }        
    }

    const [fun_fact, set_fact] = React.useState('');

    const generate_fact =()=>{
        //Reason for function is cause useEffect()
        // CAN NOT call a async function so this will call the function
        fetch_fact();
    }

    React.useEffect(()=>{
        
        generate_fact()
    }, 
    //The following array is empty since I only want it to run when the page first loads
    []);
    
    return ( 
    <>
    <h2>Fun Fact!</h2>
    <p>{fun_fact}</p>
    <button onClick={generate_fact}>Generate Fact!</button>
    </>
    )
}

export default FunFact;