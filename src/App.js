
import { BrowserRouter,Routes, Route } from "react-router-dom";
import "./App.css";
// import { Brands} from "./Brands";
import Hello from "./Home";
import { Brands } from "./Brands";

function App(){
  return (
    <>
   <BrowserRouter>
    <Route
    path="/"
    element={Hello}>
    </Route>
   </BrowserRouter>
   </>
  // <Brands/>
    
  );
}

export default App;
