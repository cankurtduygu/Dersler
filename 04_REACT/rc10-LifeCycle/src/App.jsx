import { useState } from 'react';
import './App.css';
import LifeCycleMethods from './LifeCycleMethods';
import Clock from './Clock';
import People from './useEffekt-fetch-axios/People';


function App() {

  const [show, setShow] = useState(false)


  return (
    <div className="container text-center mt-5">
    <button className='btn btn-danger' onClick={() => setShow((prev)=> !prev)}>SHOW</button>
      {/* {show && <LifeCycleMethods />}
      <LifeCycleMethods count={100} /> */}

      {/* {show && <Clock />} */}

      <People />
    </div>
  );
}

export default App;
