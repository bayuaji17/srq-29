import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Result from "../pages/Result";

export default function RouterPages() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
