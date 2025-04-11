import { useState } from "react";
import "./card.css"


const Card = () => {

    const [flip, setFlip] = useState(false);

    return (
    <div className={`card ${flip ? "flip" : ""}`} onClick={() => setFlip(!flip)}>
        <div className="front" >
            <img src="dog.jpg" alt="dog" />
        </div>
        <div className="back">
            <img src="cat.jpg" alt="cat" />
        </div>
    </div>
    )
}

export default Card