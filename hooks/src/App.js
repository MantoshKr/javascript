import { Route, Routes } from "react-router-dom";
import PageUseRef from "./pages/PageUseRef";
import PageFocusOnInputText from "./pages/PageFocusOnInputText";


function App() {
  return (
    <div>
    <Routes>
    <Route path="/pageuseref" element={<PageUseRef />}/>
    {/* PageFocusOnInputText */}
    <Route path="/pagefocusoninputtext" element={<PageFocusOnInputText />}/>
    </Routes>
    </div>
  );
}

export default App;
