import React,{ useState,useEffect } from 'react';

const FComponents = () => {
    // If we want all the class component life cycle methods like componentDidMount, unmount, we need to use useEffect hook

    const [time,setTime] = useState(new Date().toString());
    const [msg,setMsg] = useState("Functional Component");

    useEffect(() => {
        console.log("Functional Component Mounted Or Updated");
        const interval = setInterval(showDate,1000);

        return () => {
            console.log("Cleanup of interval");
            clearInterval(interval);
        }
    },[time]);

    const showDate = () => {
        setTime(new Date().toString());
    }

    return (
        <div>

            <h1>{time}</h1>
            <button onClick={showDate} >Show Date</button>
            <h1>{msg}</h1>
            {/* use arraow function for useState inside onClick  */}
            <button onClick={() => setMsg("Changed Functional Component")} >Show Message</button>
            
        </div>
    )
}

export default FComponents
