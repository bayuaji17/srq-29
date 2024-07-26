import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Result from "../pages/Result";
import { NotFound } from "../pages/NotFound";

export default function RouterPages() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
