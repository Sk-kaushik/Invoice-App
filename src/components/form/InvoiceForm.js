import React from "react";
import { useDispatch } from "react-redux";
import { saveInvoice } from "../../redux/actions/actions";
import uuid from "uuid";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";

import "./form.css";

const InvoiceForm = () => {
  const dispatch = useDispatch();

  const getFormValues = (e) => {
    e.preventDefault();

    let data = new FormData(e.target);
    let id = uuid();
    var date = data.get("lastDate").replaceAll("-", "/");

    let obj = {
      id: id,
      recieverName: data.get("rName"),
      recieverAddress: data.get("rAddress"),
      senderName: data.get("sName"),
      senderAddress: data.get("rAddress"),
      labourCharges: data.get("labour"),
      expenses: data.get("expenses"),
      lastDate: date,
      date_created: moment().format("YYYY/MM/DD"),
      workHour: data.get("work-hour"),

      materials: [
        data.get("material1"),
        data.get("material2"),
        data.get("material3"),
        data.get("material4"),
      ],

      paymentMode: data.get("customRadio"),
      paid: false,
      paidOn: "",
    };

    toast.success("Saved Successfully!");
    dispatch(saveInvoice(obj));
  };

  return (
    <div className="container d-flex">
      <div className="container shadow form-container">
        <div className="row">
          <div className="col-md-3 form-heading d-flex align-items-center justify-content-center text-white text-uppercase bg-dark">
            <h1>
              <strong>Add Invoice</strong>
            </h1>
          </div>
          <div className="col-md-9 d-flex justify-content-center">
            <div className="form-right">
              <form onSubmit={getFormValues} name="forms">
                <div className="form-row row d-flex bg-red justify-content-between">
                  {/* -----------------LEFT COLUMN----------------- */}
                  <div className="col-md-5 form-to mt-5">
                    <h5>To</h5>

                    <div className="container-fluid">
                      <label className="sr-only mb-1 mt-2">Name</label>
                      <div className="input-group">
                        <div className="input-group-text bg-dark">
                          <i className="bi-person-fill" role="img"></i>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          required
                          placeholder="Name"
                          id="rName"
                          name="rName"
                        />
                      </div>
                      <label className="sr-only mb-1 mt-3 ">Address</label>
                      <div className="input-group">
                        <div className="input-group-text bg-dark">
                          <i className="bi-geo-alt-fill" role="img"></i>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          required
                          placeholder="Address"
                          id="rAddress"
                          name="rAddress"
                        />
                      </div>
                    </div>

                    <div className="container-fluid mt-5">
                      <label className="sr-only mb-1 mt-3 ">
                        Working Hours
                      </label>
                      <div className="input-group">
                        <div className="input-group-text bg-dark">
                          <i className="bi-clock-fill" role="img"></i>
                        </div>
                        <input
                          type="number"
                          className="form-control"
                          required
                          placeholder="03"
                          id="working-hours"
                          name="work-hour"
                        />
                      </div>
                      {/* -------------MATERIALS------------------ */}
                      <label className="sr-only mb-1 mt-3 ">Materials</label>
                      <div className="input-group">
                        <div className="input-group-text bg-dark">
                          <i style={{ paddingLeft: "4px" }}>1</i>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Material 1"
                          id="material1"
                          name="material1"
                        />
                      </div>
                      {/* ---------- */}
                      <div className="input-group mt-3">
                        <div className="input-group-text bg-dark">
                          <i style={{ paddingLeft: "3px" }}>2</i>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Material 2"
                          id="material2"
                          name="material2"
                        />
                      </div>
                      {/* ------------------------ */}
                      <div className="input-group mt-3">
                        <div className="input-group-text bg-dark">
                          <i style={{ paddingLeft: "3px" }}>3</i>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Material 3"
                          name="material3"
                        />
                      </div>
                      {/* ----------------- */}
                      <div className="input-group mt-3">
                        <div className="input-group-text bg-dark">
                          <i style={{ paddingLeft: "3px" }}>4</i>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Material 4"
                          name="material4"
                        />
                      </div>
                      {/* ----------DUE DATE------------ */}
                      <label className="sr-only mb-1 mt-3 ">Last Date</label>
                      <div className="input-group">
                        <div className="input-group-text bg-dark">
                          <i className="bi-calendar-fill" role="img"></i>
                        </div>
                        <input
                          type="date"
                          className="form-control"
                          required
                          name="lastDate"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ----------------RIGHT COLUMN----------- */}
                  <div className="col-md-5 mt-5 form-to">
                    <h5>From</h5>
                    <div className="container-fluid">
                      <label className="sr-only mb-1 mt-2">Name</label>
                      <div className="input-group">
                        <div className="input-group-text bg-dark">
                          <i className="bi-person-fill" role="img"></i>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          required
                          placeholder="Name"
                          name="sName"
                        />
                      </div>
                      <label className="sr-only mb-1 mt-3">Address</label>
                      <div className="input-group">
                        <div className="input-group-text bg-dark">
                          <i className="bi-geo-alt-fill" role="img"></i>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          required
                          placeholder="Address"
                          name="sAddress"
                        />
                      </div>
                    </div>

                    <div className="container-fluid mt-5">
                      <label className="sr-only mb-1 mt-3 ">Expenses</label>
                      <div className="input-group">
                        <div className="input-group-text bg-dark">
                          <i className="bi-currency-dollar" role="img"></i>
                        </div>
                        <input
                          type="number"
                          className="form-control"
                          required
                          placeholder="21.00"
                          name="expenses"
                        />
                      </div>
                      <label className="sr-only mb-1 mt-3 ">
                        Labour Charges
                      </label>
                      <div className="input-group">
                        <div className="input-group-text bg-dark">
                          <i className="bi-currency-dollar" role="img"></i>
                        </div>
                        <input
                          type="number"
                          className="form-control"
                          required
                          placeholder="25.00"
                          name="labour"
                        />
                      </div>

                      <label className="sr-only mb-1 mt-5">Pay Via</label>

                      <div className="custom-control custom-radio d-flex flex-column">
                        <div>
                          <input
                            type="radio"
                            id="customRadio1"
                            name="customRadio"
                            className="custom-control-input"
                            value="Cash"
                            required
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio1"
                          >
                            Cash
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="customRadio2"
                            name="customRadio"
                            className="custom-control-input"
                            value="Cheque"
                            required
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio2"
                          >
                            Cheque
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="customRadio3"
                            name="customRadio"
                            className="custom-control-input"
                            value="Card"
                            required
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio3"
                          >
                            Card
                          </label>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-dark save-btn text-white"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default InvoiceForm;
