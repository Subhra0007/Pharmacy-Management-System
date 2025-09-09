import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Customer from "./pages/Customer";
// import Purchase from "./pages/Purchase";
import Analytics from "./pages/Analytics";
import Suppliers from "./pages/Suppliers";
import Product from "./pages/Product";
import Doctor from "./pages/Doctor";
import SupplierOrder from "./pages/SupplierOrder";
import CustomerOrders from "./pages/CustomerOrders";
import HelpSupport from "./pages/Helps&Supports";
import Settings from "./pages/Settings";
import Notes from "./pages/Notes";
import Expenses from "./pages/Expenses";
import Employee from "./pages/Employees";
import ReturnProduct from "./pages/ReturnProduct";
import Branch from "./pages/Branch"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customer" element={<Customer />} />
          {/* <Route path="/purchase" element={<Purchase />} /> */}
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/product" element={<Product />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/supplier-orders" element={<SupplierOrder />} />
          <Route path="/customer-orders" element={<CustomerOrders />} />
          <Route path="/help-supports" element={< HelpSupport/>} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notes" element={< Notes/>} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/employee" element={<Employee />} />
           <Route path="/return-product" element={< ReturnProduct/>} />
            <Route path="/branch" element={< Branch/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
