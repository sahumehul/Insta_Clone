import "./App.css";
import { LandingPage } from "./componant/LandingPage";
import { FrontPage } from "./componant/FrontPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
	return (
    <div>
			{/* <LandingPage/> */}
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FrontPage/>}></Route> 
        <Route path="/posts" element={<LandingPage/>}></Route>
      </Routes>
     </BrowserRouter>
		</div>
	);
}

export default App;
