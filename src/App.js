import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import VideoUpload from "./pages/VideoUpload/VideoUpload";

function App() {
  return (
    <div>

      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="uploadvideo" element={<VideoUpload />} />
        <Route path="/:videoId" element={<HomePage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
