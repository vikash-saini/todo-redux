import React from "react";

const EventBubble=()=>{

const handleClick=()=>{
    console.log("clicked");
}

const handleButtonClick=()=>{
    console.log("Button clicked");
}
    return<>
        <div onClick={()=>handleClick()}>
            <p>Hello This is Event Bubbling</p>
            {/* The click event on this button will bubble up to parent,
            because there is no 'onClick' attribute defined */}
            <button onClick={()=>handleButtonClick()}>Click me</button>
        </div>
    </>
}

export default EventBubble;