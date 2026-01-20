import { useState } from "react";
import Events from "../1-events-hookIntro/Events";


const MouseEvents = () => {
const[visible,setVsbl]=useState(false)


  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>
      <div
        id="todo-1"
        className="bg-success text-light w-50 p-4"
       onMouseOver={()=>setVsbl(true)}
       onMouseLeave={()=>setVsbl(false)}
      >
        onMouseOver & onMouseLeave
      </div>
      {/* Conditional Rendering */}
      <p> {visible &&  <Events/> }
      </p>
      <div
        id="todo-2"
        className="bg-info text-light w-50 p-4 mt-4"
    //  onDoubleClick={(e)=>e.target.classList.add("bg-danger")}
     onDoubleClick={(e)=>e.target.classList.toggle("bg-danger")}
      >
        onDoubleClick
      </div>
      <div
        id="todo-3"
        className="bg-primary text-light w-50 p-4 my-4"
     
      >
        <span>onMouseMove</span>
        <p>{}</p>
        <p>{}</p>
      </div>
    
    </div>
  );
}

export default MouseEvents