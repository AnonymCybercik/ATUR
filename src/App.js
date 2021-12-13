import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exec path="/" element={<Home />}></Route>
                    <Route exec path="/destination" element={<Detail />}></Route>
              
                </Routes>
              
            </BrowserRouter>
        </div>
    );
}

export default App;
