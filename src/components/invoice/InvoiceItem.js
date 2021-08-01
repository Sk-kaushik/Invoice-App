import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "uuid";

import {
  Accordion,
  Card,
  Container,
  useAccordionToggle,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import { setPaid, deleteInvoice } from "../../redux/actions/actions";
import Prompt from "../prompt/Prompt";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";

const InvoiceItem = ({ data }) => {
  const dispatch = useDispatch();

  const invoiceData = data;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePaid = () => {
    console.log("handle paid");
    dispatch(setPaid(data.id));
  };

  const handleDelete = (e) => {
    toast.success("deleted successfully");
    dispatch(deleteInvoice(data.id));
  };

  const handlePrompt = (e) => {
    handleShow();
  };

  return (
    <Container className="mt-5">
      <Accordion>
        <Card className="col-md-6 bg-light p-2 card border-1 d-flex">
          <Card.Header className="border-0 bg-light ">
            <span>
              <p className="d-inline">
                <strong>To :</strong>
              </p>
              <p className="d-inline reciever-name">
                {invoiceData.recieverName}
              </p>
            </span>
            <OverlayTrigger overlay={<Tooltip>More Info</Tooltip>}>
              <span style={{ float: "right" }}>
                <CustomToggle eventKey="0" style={{ border: "none" }}>
                  <i
                    className="bi bi-info-circle-fill"
                    style={
                      invoiceData.paid
                        ? {
                            color: "green",
                          }
                        : {
                            color: "red",
                          }
                    }
                  ></i>
                </CustomToggle>
              </span>
            </OverlayTrigger>
          </Card.Header>
          <Accordion.Collapse eventKey="0" className="card-body">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <p>
                  <strong>Date Created</strong> :
                  <span> {invoiceData.date_created}</span>
                </p>
                <p>
                  <strong>Status:</strong>
                  {invoiceData.paid ? (
                    <span style={{ color: "green" }}> Paid</span>
                  ) : (
                    <span style={{ color: "red" }}> Not paid</span>
                  )}
                </p>
              </div>

              <div className="d-flex justify-content-between">
                <div className="materials col-md-5">
                  <strong>Materials</strong>
                  <ol>
                    {invoiceData.materials.map((mat) => (
                      <li key={uuid()}>{mat}</li>
                    ))}
                  </ol>
                </div>
                <div className="charges col-md-6">
                  <p></p>
                  <ul>
                    <li>
                      <strong>Expenses :</strong>
                      <span
                        className=""
                        id="expenses"
                        style={{ float: "right" }}
                      >
                        {invoiceData.expenses}
                        <span>$</span>
                      </span>
                    </li>
                    <li>
                      <strong>Labour Chagres :</strong>
                      <span
                        id="labour"
                        style={{ float: "right", marginLeft: "5px" }}
                      >
                        {invoiceData.labourCharges}

                        <span>$</span>
                      </span>
                    </li>
                    <li>
                      <strong>Pay Via :</strong>
                      <span id="pay-via" style={{ float: "right" }}>
                        {invoiceData.paymentMode}
                      </span>
                    </li>
                    <li>
                      <strong>Last Date :</strong>
                      <span id="last-date" style={{ float: "right" }}>
                        {invoiceData.lastDate}
                      </span>
                    </li>
                    {invoiceData.paid && (
                      <li>
                        <strong>Paid On :</strong>
                        <span id="last-date" style={{ float: "right" }}>
                          {invoiceData.paidOn}
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              {!invoiceData.paid ? (
                <button className="btn btn-success paid" onClick={handlePaid}>
                  <i className="bi bi-check2"></i>
                  Paid
                </button>
              ) : (
                <button className="btn btn-danger paid" onClick={handlePaid}>
                  <i className="bi bi-x"> </i>
                  Not Paid
                </button>
              )}
              <div className="invoice-item-action">
                <button className="btn btn-primary" onClick={handlePrompt}>
                  <i className="bi bi-envelope-fill"></i>
                  Send
                </button>
                <button className="btn btn-danger" onClick={handleDelete}>
                  <i className="bi bi-trash-fill"></i>
                  Delete
                </button>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Prompt show={show} handleClose={handleClose} />
      <ToastContainer />
    </Container>
  );
};

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () => console.log());

  return (
    <button
      type="button"
      style={{ float: "right", border: "none" }}
      onClick={decoratedOnClick}
      className="bg-light"
    >
      {children}
    </button>
  );
}

export default InvoiceItem;
