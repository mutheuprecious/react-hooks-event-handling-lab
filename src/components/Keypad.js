// Code Keypad Component Here
import react from "react";

function Keypad(){
    function handleChange(Event){
        console.log("Entering password...")
    }
    
    return <input onChange={handleChange} type="password" name="password"/>
}

export default Keypad