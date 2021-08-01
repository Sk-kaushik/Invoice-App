import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";

const Sidebar = () => {
  const [path, setPath] = useState("Add Invoice");

  useEffect(() => {}, [path]);

  return (
    <nav className="left d-flex flex-column bg-dark align-items-center">
      <div className="heading text-center text-white w-100 text-uppercase p-4 bg-black">
        <strong>{path}</strong>
      </div>
      <div className="nav-items d-flex flex-column align-self-start">
        <Link
          to="/"
          onClick={() => {
            setPath("Add Invoice");
          }}
        >
          <i className="bi bi-plus mr" id="plus-icon"></i>
          Add Invoice
        </Link>
        <Link
          to="/allInvoices"
          onClick={() => {
            setPath("All Invoices");
          }}
        >
          <i className="bi bi-list mr"></i>
          All Invoices
        </Link>
        <Link
          to="/paidInvoices"
          onClick={() => {
            setPath("Paid Invoices");
          }}
        >
          <i className="bi bi-list mr"></i>
          Paid Invoices
        </Link>
        <Link
          to="/dueInvoices"
          onClick={() => {
            setPath("Due Invoices");
          }}
        >
          <i className="bi bi-list mr"></i>
          Due Invoices
        </Link>
        <Link
          to="/lateInvoices"
          onClick={() => {
            setPath("Late Invoices");
          }}
        >
          <i className="bi bi-list mr"></i>
          Late Invoices
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
