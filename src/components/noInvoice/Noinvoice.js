import React from "react";
import { Link } from "react-router-dom";
import Nodata from "./noData.svg";
import "./noInvoice.css";

const Noinvoice = ({ route }) => {
  // SHOW PLACEHOLDER IMAGE RESPECTIVE TO THE URL

  const renderInvoice = () => {
    // URL TO DUE INVOICES
    if (route === "/dueInvoices") {
      return (
        <div>
          <img src={Nodata} className="col-md-5" alt="" />
          <h1 className="mt-5 mb-3">No Due Invoice</h1>
        </div>
      );
    }
    // URL TO ALL INVOICES
    else if (route === "/allInvoices") {
      return (
        <div>
          <img src={Nodata} className="col-md-5" alt="" />
          <h1 className="mt-5 mb-3">No Invoice</h1>
          <Link className="btn noInoviceBtn text-white" to="/">
            Add Invoice
          </Link>
        </div>
      );
    }

    // URL TO LATE INVOICES
    else if (route === "/lateInvoices") {
      return (
        <div>
          <img src={Nodata} className="col-md-5" alt="" />
          <h1 className="mt-5 mb-3">No Late Invoice</h1>
        </div>
      );
    }

    // URL TO PAID INVOICES
    else if (route === "/paidInvoices") {
      return (
        <div>
          <img src={Nodata} className="col-md-5" alt="" />
          <h1 className="mt-5 mb-3">No Paid Invoice</h1>
        </div>
      );
    }
  };

  return <div className="mt-5 pt-5 text-center">{renderInvoice()}</div>;
};

export default Noinvoice;
