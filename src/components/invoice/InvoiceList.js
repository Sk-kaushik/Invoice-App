import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import moment from "moment";

// COMPONENTS
import InvoiceItem from "./InvoiceItem";
import NoInvoice from "../noInvoice/Noinvoice";

// STYLES
import "./invoice.css";

const InvoiceList = ({ match }) => {
  // const invoiceData = useSelector((state) => state)
  //   ? useSelector((state) => state)
  //   : [];

  const invoiceData = useSelector((state) => {
    if (state.length > 0) {
      console.log(state);
      return state;
    }
    return [];
  });

  const renderInvoices = () => {
    var currentDate = moment().format("YYYY/MM/DD");

    if (match.path === "/allInvoices") {
      var comp = invoiceData.map((data) => (
        <InvoiceItem data={data} key={data.id} />
      ));

      return comp.length > 0 ? comp : <NoInvoice route={"/allInvoices"} />;
    } else if (match.path === "/dueInvoices") {
      var invoices = invoiceData.filter((item) => !item.paid);
      let dueInvoices = invoices.filter((item) => item.lastDate < currentDate);

      comp = dueInvoices.map((data) => (
        <InvoiceItem data={data} key={data.id} />
      ));

      return comp.length > 0 ? comp : <NoInvoice route={"/dueInvoices"} />;
    } else if (match.path === "/lateInvoices") {
      invoices = invoiceData.filter((item) => item.paid);
      let dueInvoices = invoices.filter((item) => item.paidOn > item.lastDate);

      comp = dueInvoices.map((data) => (
        <InvoiceItem data={data} key={data.id} />
      ));

      return comp.length > 0 ? comp : <NoInvoice route={"/lateInvoices"} />;
    } else if (match.path === "/paidInvoices") {
      invoices = invoiceData.filter((item) => item.paid);
      comp = invoices.map((data) => <InvoiceItem data={data} key={data.id} />);

      return comp.length > 0 ? comp : <NoInvoice route={"/paidInvoices"} />;
    }
  };

  return <Container className="align-self-start">{renderInvoices()}</Container>;
};

export default InvoiceList;
