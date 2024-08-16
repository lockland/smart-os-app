import React from "react";
import ReactPrinter from "./ReactPrinter";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Employee from "./pages/Employee";
import Outgoing from "./pages/Outgoing";
import Service from "./pages/Service";
import Invoice from "./pages/Invoice";

export default function Main() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/orcamento" element={<ReactPrinter />} />
      <Route path="/empresa" element={<Company />} />
      <Route path="/funcionario" element={<Employee />} />
      <Route path="/custos" element={<Outgoing />} />
      <Route path="/servico" element={<Service />} />
      <Route path="/nota-fiscal" element={<Invoice />} />
    </Routes>
  )
}