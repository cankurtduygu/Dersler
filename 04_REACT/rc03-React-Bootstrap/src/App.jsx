import MyCard from "./components/MyCard.jsx";
import MyNavbar from "./components/MyNavbar";
import Slider from "./components/Slider";
import mydata from './data.js';

function App() {
  // console.log(mydata);
  
  return (
    <div>
      <MyNavbar />
      <Slider />
      <MyCard mydata={mydata} />
    </div>
  );
}

export default App;
