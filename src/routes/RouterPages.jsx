import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Questions from "../components/Questions";

export default function RouterPages() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/q" element={<Questions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
