import React from 'react';
import './CircleSelector.css';

const CircleSelector = (props) => {
    return (
    <div className="CircleSelector">
        {props.circles.map((idx) => 
            <button
                onClick={() => props.handleCircleSelection(idx)}
                className={props.selected == idx ? 'selected' : ''}
            >
            SELECT CIRCLE {idx}
            </button>
        )}
    
    </div>
)}

// function CircleSelector(props) {
//     return (
//         <div className="CircleSelector">
//             <button
//             className={props.selected === 1 ? 'selected' : ''}
//             onClick={() => props.handleClick1()}
//             >
//                 Select Circle 1
//             </button>
//             <button
//                 className={props.selected === 2 ? 'selected' : ''}
//                 onClick={() => props.handleClick2()}
//             >
//                 Select Circle 2
//             </button>
//             <button
//                 className={props.selected === 3 ? 'selected' : ''}
//                 onClick={() => props.handleClick3()}
//             >
//                 Select Circle 3
//             </button>
//             <button
//                 className={props.selected === 4 ? 'selected' : ''}
//                 onClick={() => props.handleClick4()}
//             >
//                 Select Circle 4
//             </button>
//         </div>
//     )
// }


export default CircleSelector;