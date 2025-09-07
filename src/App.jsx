import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Customer from "./pages/Customer";
import Purchase from "./pages/Purchase";
import SalesReport from "./pages/SalesReport";
import Suppliers from "./pages/Suppliers";
import Medicine from "./pages/Medicine";
import Doctor from "./pages/Doctor";
import Invoice from "./pages/Invoice";
import Orders from "./pages/Orders";
import HelpSupport from "./pages/Helps&Supports";
import Settings from "./pages/Settings";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/sales-report" element={<SalesReport />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/help-supports" element={< HelpSupport/>} />
           <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
