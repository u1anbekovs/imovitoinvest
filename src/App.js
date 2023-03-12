import './App.css';
import {Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Buy from "./components/Buy";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/Contact'} element={<Contact/>}/>
                <Route path={'/About'} element={<About/>}/>
                <Route path={'/Buy'} element={<Buy/>}/>
            </Routes>
        </div>
    );
}

export default App;
