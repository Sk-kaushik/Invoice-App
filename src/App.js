import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import InvoiceList from "./components/invoice/InvoiceList";
import InvoiceForm from "./components/form/InvoiceForm";

const App = () => {
  return (
    <Router>
      <div className="d-flex ">
        <Sidebar />

        <div className="container-fluid d-flex align-items-center">
          <Switch>
            <Route exact path="/" component={InvoiceForm} />
            <Route path="/allInvoices" component={InvoiceList} />
            <Route path="/paidInvoices" component={InvoiceList} />
            <Route path="/dueInvoices" component={InvoiceList} />
            <Route path="/lateInvoices" component={InvoiceList} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
