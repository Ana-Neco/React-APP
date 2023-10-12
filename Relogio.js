import React, { useState } from 'react';
import './Relogio.css';

function Relogio() 
{
    const [time, setTime] = useState(new Date());

    setInterval(() => {
        setTime(new Date());
    }, 1000);

    const formattedTime = time.toLocaleTimeString();

    return (
        <div class="clock">
            <div class="time" id="time">
                {formattedTime}
            </div>
        </div>
    );
}

export default Relogio;
