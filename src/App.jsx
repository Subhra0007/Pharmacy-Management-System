import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import Dashboard from "./pages/Dashboard";
import Customer from "./pages/Customer";
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
import Branch from "./pages/Branch";

// Add Forms
import AddCustomer from "./addform/AddCustomer";
import AddSupplier from "./addform/AddSuppliers";
import AddProduct from "./addform/AddProduct";
import AddDoctor from "./addform/AddDoctor";
import AddAppointment from "./addform/AddAppointment";
import AddNewSupplierOrder from "./addform/AddSupplierOrder";
import AddCustomerOrder from "./addform/AddCustomerOrder";
import AddNote from "./addform/AddNote";
import AddExpense from "./addform/AddExpense";
import AddEmployee from "./addform/AddEmployee";
import AddNewEmployee from "./addform/AddNewEmployee";
import AddReturnProduct from "./addform/AddReturnProduct";
import AddBranch from "./addform/AddBranch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Pages */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/products" element={<Product />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/supplier-orders" element={<SupplierOrder />} />
          <Route path="/customer-orders" element={<CustomerOrders />} />
          <Route path="/help-supports" element={<HelpSupport />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/return-product" element={<ReturnProduct />} />
          <Route path="/branch" element={<Branch />} />

          {/* Add Forms */}
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/add-supplier" element={<AddSupplier />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/add-appointment" element={<AddAppointment />} />
          <Route path="/add-supplier-order" element={<AddNewSupplierOrder />} />
          <Route path="/add-customer-order" element={<AddCustomerOrder />} />
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/add-new-employee" element={<AddNewEmployee />} />
          <Route path="/add-return-product" element={<AddReturnProduct />} />
          <Route path="/add-branch" element={<AddBranch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
