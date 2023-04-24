import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutMePage from "./pages/AboutMePage";
import CarrierPage from "./pages/CarrierPage";
import SkillsPage from "./pages/SkillsPage";
import ContactsPage from "./pages/ContactsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routes>
            {/* <Route index path="/" element={<AboutMePage />} /> */}
            <Route index element={<AboutMePage />} />
            <Route path="/carrier" element={<CarrierPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
