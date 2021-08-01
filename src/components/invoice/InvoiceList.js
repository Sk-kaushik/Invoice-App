import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import moment from "moment";

// componentONENTS
import InvoiceItem from "./InvoiceItem";
import NoInvoice from "../noInvoice/Noinvoice";

// STYLES
import "./invoice.css";

const InvoiceList = ({ match }) => {
  // GETTING DATA FROM REDUX STORE
  const invoiceData = useSelector((state) => {
    if (state.length > 0) {
      return state;
    }
    return [];
  });

  const renderInvoices = () => {
    var currentDate = moment().format("YYYY/MM/DD");

    // URL TO ALL INVOICES
    if (match.path === "/allInvoices") {
      // MAP THROUGH ALL ITEMS AND RETURN LIST OF INVOICES
      var component = invoiceData.map((data) => (
        <InvoiceItem data={data} key={data.id} />
      ));

      // RETURN COMPONENT IF DATA IS PRESENT ELSE SHOW PLACEHOLDER IMAGE
      return component.length > 0 ? (
        component
      ) : (
        <NoInvoice route={"/allInvoices"} />
      );
    }
    // URL TO DUE INVOICES
    else if (match.path === "/dueInvoices") {
      // RETURN LIST OF INVOICES THAT ARE NOT PAID
      var invoices = invoiceData.filter((item) => !item.paid);
      let dueInvoices = invoices.filter((item) => item.lastDate < currentDate);

      component = dueInvoices.map((data) => (
        <InvoiceItem data={data} key={data.id} />
      ));

      // RETURN COMPONENT IF DATA IS PRESENT ELSE SHOW PLACEHOLDER IMAGE
      return component.length > 0 ? (
        component
      ) : (
        <NoInvoice route={"/dueInvoices"} />
      );
    } else if (match.path === "/lateInvoices") {
      // REUTRN LIST OF LATE INVOICES
      invoices = invoiceData.filter((item) => item.paid);
      let dueInvoices = invoices.filter((item) => item.paidOn > item.lastDate);

      component = dueInvoices.map((data) => (
        <InvoiceItem data={data} key={data.id} />
      ));

      // RETURN COMPONENT IF DATA IS PRESENT ELSE SHOW PLACEHOLDER IMAGE
      return component.length > 0 ? (
        component
      ) : (
        <NoInvoice route={"/lateInvoices"} />
      );
    } else if (match.path === "/paidInvoices") {
      // RETURN LIST OF PAID INVOICES
      invoices = invoiceData.filter((item) => item.paid);
      component = invoices.map((data) => (
        <InvoiceItem data={data} key={data.id} />
      ));

      // RETURN COMPONENT IF DATA IS PRESENT ELSE SHOW PLACEHOLDER IMAGE
      return component.length > 0 ? (
        component
      ) : (
        <NoInvoice route={"/paidInvoices"} />
      );
    }
  };

  return <Container className="align-self-start">{renderInvoices()}</Container>;
};

export default InvoiceList;
