
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./page/home/Home";
import Hotel from "./page/hotel/Hotel";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="hotel" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
