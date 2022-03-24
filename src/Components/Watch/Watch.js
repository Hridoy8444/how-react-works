import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0)

    const increaseSteps = () =>   setSteps(steps + 1);

    useEffect(() => {
        console.log(steps)
    }, [steps])
    
    return (
        <div>
           <h2>This is my smart Watch</h2> 
           <h3>My current steps: {steps}</h3>
           <button onClick={increaseSteps}>De Dour...............</button>
           <Display name="garmin" steps={steps}></Display>
        </div>
    );
};

export default Watch;